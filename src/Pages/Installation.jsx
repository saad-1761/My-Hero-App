import React, { useEffect, useState } from "react";
import useApps from "../Hooks/useApps";
import { toast, ToastContainer } from "react-toastify";

const Installation = () => {
  const { loading } = useApps();
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("install")) || [];
    if (apps) setInstalledApps(apps);
  }, []);

  const sortApps = () => {
    if (sortOrder === "asc") {
      return [...installedApps].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "desc") {
      return [...installedApps].sort((a, b) => b.size - a.size);
    } else {
      return installedApps;
    }
  };

  const handleRemove = (id) => {
    const existing = JSON.parse(localStorage.getItem("install")) || [];
    let updatedApps = existing.filter((app) => app.id !== id);
    toast.success("App removed from the installation list");
    localStorage.setItem("install", JSON.stringify(updatedApps));
    setInstalledApps(updatedApps);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto w-full  md:px-8 lg:px-12 py-4 md:py-8 lg:py-12">
      <div className="flex justify-between flex-col md:flex-row items-center mb-4 ">
        <h2 className="text-2xl md:text-4xl font-bold text-center my-8">
          Installation List
          <span className="ml-2 text-sm text-gray-500">
            ({sortApps().length}) apps found
          </span>
        </h2>
        <label className="form-control max-w-xs w-full">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort By</option>
            <option value="asc">Size: Low to High</option>
            <option value="desc">Size: High to Low</option>
          </select>
        </label>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : (
        <div className="space-y-4 px-2 md:px-0">
          {sortApps().map((app) => (
            <div
              key={app.id}
              className="flex items-center gap-2 border p-4 rounded-lg shadow-sm"
            >
              <img
                className="h-20 w-20 object-cover rounded-lg"
                src={app.image}
                alt={app.title}
              />
              <div>
                <h3 className="text-md md:text-2xl font-bold">{app.title}</h3>
                <p className="text-gray-500 text-sm md:text-lg">
                  {app.companyName}
                </p>
                <p className="text-gray-500">{app.size} MB</p>
              </div>
              <button
                onClick={() => handleRemove(app.id)}
                className="ml-auto btn btn-outline btn-error"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Installation;

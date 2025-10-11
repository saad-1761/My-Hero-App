import React, { useEffect, useState } from "react";
import useApps from "../Hooks/useApps";
import { Link } from "react-router";
import AppCard from "../Components/AppCard";
import AppErrorPage from "./AppErrorPage";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  useEffect(() => {
    if (search) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        setIsSearching(false);
      }, 300); // 300ms delay for smooth UX

      return () => clearTimeout(timer);
    } else {
      setIsSearching(false);
    }
  }, [search]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <div className="max-w-screen-xl mx-auto w-full  md:px-8 lg:px-12 py-4 md:py-8 lg:py-12">
          <h2 className="text-4xl md:text-6xl font-bold text-center my-8">
            Our All Applications
          </h2>
          <p className="text-md font-semibold text-center mb-8 text-gray-400">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="flex justify-between py-5 items-center max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
          <h1 className="text-3xl font-semibold">
            All Products{" "}
            <span className="text-sm text-gray-500">
              ({searchedApps.length}) Products Found.
            </span>
          </h1>
          <label className="input">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search Products"
            />
            {isSearching && (
              <span className="loading loading-spinner loading-sm absolute right-3 top-1/2 -translate-y-1/2"></span>
            )}
          </label>
        </div>
        {isSearching ? (
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        ) : searchedApps.length === 0 ? (
          <AppErrorPage search={search}></AppErrorPage>
        ) : (
          <div className="grid grid-cols-1 max-w-screen-xl mx-auto w-full  md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {searchedApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;

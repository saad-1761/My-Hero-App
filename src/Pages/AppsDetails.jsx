import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import useApps from "../Hooks/useApps";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import reviewsIcon from "../assets/icon-review.png";
import { toast, ToastContainer } from "react-toastify";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppsDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find((app) => app.id === parseInt(id));
  const [isInstalled, setIsInstalled] = useState(false);

  const {
    title,
    companyName,
    image,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
    description,
  } = app || {};

  useEffect(() => {
    if (app) {
      const existing = JSON.parse(localStorage.getItem("install")) || [];
      console.log(existing);
      const alreadyInstalled = existing.some((item) => item.id === app.id);
      setIsInstalled(alreadyInstalled);
    }
  }, [app]);

  const handleInstall = () => {
    const existing = JSON.parse(localStorage.getItem("install")) || [];

    const isDuplicate = existing.some((item) => item.id === app.id);
    if (isDuplicate) {
      toast.error("App is already in the installation list");
      return;
    }

    const updatedInstall = [...existing, app];
    localStorage.setItem("install", JSON.stringify(updatedInstall));
    setIsInstalled(true);
    toast.success("App added to the installation list");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="hero bg-base-200 min-h-screen text-center lg:text-left">
      <div className="flex flex-col">
        <div className="hero-content max-w-screen-xl mx-auto w-full flex-col lg:flex-row">
          <img src={image} className="max-w-[50vh] rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">{companyName}</p>
            <div className="flex flex-col items-center gap-4 my-4 md:flex-row">
              <div className="badge badge-outline text-[#00D390] font-bold bg-green-100">
                <img className="h-4 w-4" src={downloadIcon} alt="" />
                {downloads / 1000000000} M Downloads
              </div>
              <div className="badge badge-outline font-bold text-[#FF8811] bg-[#FFF0E1]">
                <img className="h-4 w-4" src={ratingIcon} alt="" />
                {ratingAvg} Rating
              </div>
              <div className="badge badge-outline font-bold text-[#FF5181] bg-[#FFF0E1]">
                <img className="h-4 w-4" src={reviewsIcon} alt="" />
                {reviews / 10000000}M Reviews
              </div>
            </div>

            <button
              onClick={() => handleInstall()}
              disabled={isInstalled}
              className={
                isInstalled
                  ? `btn bg-gray-100 text-black`
                  : `btn bg-[#00D390] text-white`
              }
            >
              <ToastContainer position="top-right" autoClose={3000} />
              {isInstalled ? "Installed ✓" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto w-full md:px-4 lg:px-8 py-4 md:py-8 lg:py-12">
          <h2 className="text-4xl font-bold text-center my-8">Ratings</h2>
          <div className="rounded-xl px-2 md:px-8 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                layout="vertical"
                data={ratings}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" reversed />
                <Tooltip />
                {/* <Legend /> */}
                <Bar
                  dataKey="count"
                  fill="orange"
                  activeBar={<Rectangle fill="orange" stroke="black" />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <h2 className="max-w-screen-xl mx-auto w-full  text-4xl font-bold text-center my-8">
            About
          </h2>
          <p className=" max-w-screen-xl mx-auto w-full text-2xl font-light text-center my-2">
            {description}
          </p>
        </div>
        <Link to="/apps" className="flex justify-center mb-5">
          <button className="btn btn-outline btn-primary px-8 rounded-full">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AppsDetails;

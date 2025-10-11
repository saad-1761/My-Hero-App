import React from "react";
import { NavLink, useParams } from "react-router";
import useApps from "../Hooks/useApps";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import reviewsIcon from "../assets/icon-review.png";
import { toast, ToastContainer } from "react-toastify";

const AppsDetails = () => {
  const { id } = useParams();
  const { apps } = useApps();
  const app = apps.find((app) => app.id === parseInt(id));

  const { title, companyName, image, downloads, ratingAvg, reviews, size } =
    app || {};

  const handleInstall = () => {
    // toast("Added to Installation List");
    const existing = JSON.parse(localStorage.getItem("install"));
    let updatedInstall = [];
    if (existing) {
      const isDuplicate = existing.some((item) => item.id === app.id);
      if (isDuplicate) {
        toast.error("App is already in the installation list");
        return;
      }
      toast.success("App added to the installation list");
      updatedInstall = [...existing, app];
    } else {
      updatedInstall.push[app];
    }
    localStorage.setItem("install", JSON.stringify(updatedInstall));
  };

  return (
    <div className="hero bg-base-200 min-h-screen  text-center lg:text-left">
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
            className="btn bg-[#00D390] text-white"
          >
            <ToastContainer position="top-right" autoClose={3000} />
            Install Now ({size} MB)
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppsDetails;

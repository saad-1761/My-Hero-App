import React from "react";
import Banner from "../Components/Banner";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";
import { Link } from "react-router";

const Home = () => {
  const { apps, loading, error } = useApps();

  const featuredApps = apps.slice(0, 8);

  return (
    <div>
      <Banner />
      <div className="mb-8">
        <div className="">
          <h2 className="text-6xl font-bold text-center my-8">Trending Apps</h2>
          <p className="text-md font-semibold text-center mb-8 text-gray-400">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid grid-cols-1 max-w-screen-xl mx-auto w-full  md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {featuredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
        <Link to="/apps" className="flex justify-center my-2">
          <button className="btn btn-outline btn-primary px-8 rounded-full">
            See All Apps
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Container from "./Container";
import { Link } from "react-router";
import googlePlay from "../assets/google-play.png";
import appStore from "../assets/app-store.png";
import hero from "../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <Container>
        <div className="hero">
          <div className="hero-content mt-10">
            <div className="max-w-full text-center">
              <h1 className="text-4xl md:text-8xl font-bold">We Build</h1>
              <h1 className="text-4xl md:text-8xl font-bold">
                <span className="bg-gradient-to-r from-[#632ee2] to-[#9f62f2] text-transparent bg-clip-text">
                  Productive{" "}
                </span>
                Apps
              </h1>
              <div className="py-6 text-center text-sm md:text-xl">
                <p>
                  At HERO.IO , we craft innovative apps designed to make
                  everyday life simpler, smarter, and more exciting.
                </p>
                <p>
                  Our goal is to turn your ideas into digital experiences that
                  truly make an impact.
                </p>
              </div>
              <div className="grid grid-cols-2 max-w-lg mx-auto">
                <Link
                  to="https://play.google.com/store/games?hl=en"
                  className=" text-xl p-2 md:p-5"
                >
                  <div className="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-2 py-1">
                    <img className="h-5 md:h-8" src={googlePlay} alt="logo" />
                    <span className="font-bold text-sm md:text-xl">
                      Google Play
                    </span>
                  </div>
                </Link>
                <Link
                  to="https://www.apple.com/app-store/"
                  className=" text-xl p-2 md:p-5"
                >
                  <div className="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-2 py-1">
                    <img className="h-5 md:h-8" src={appStore} alt="logo" />
                    <span className="font-bold text-sm md:text-xl">
                      App Store
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <img src={hero} className="mb-0 mx-auto" alt="" />
      <div className="text-center bg-gradient-to-r from-[#632ee2] to-[#9f62f2] text-white ">
        <h1 className="text-sm pt-10 md:text-4xl font-bold">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex flex-col justify-center md:flex-row gap-10 py-10">
          <div className="stats stats-vertical md:stats-horizontal ">
            <div className="stat space-y-2 md:space-y-5">
              <div className="stat-title text-white text-sm md:text-xl">
                Total Downloads
              </div>
              <div className="stat-value  md:text-6xl">29.6M</div>
              <div className="stat-desc text-white text-sm md:text-xl">
                21% More than last month
              </div>
            </div>
          </div>
          <div className="stats stats-vertical md:stats-horizontal ">
            <div className="stat space-y-2 md:space-y-5">
              <div className="stat-title text-white text-2xl  md:text-xl">
                Total Reviews
              </div>
              <div className="stat-value  md:text-6xl">906K</div>
              <div className="stat-desc text-white text-sm md:text-xl">
                4% More Than Last Month
              </div>
            </div>
          </div>
          <div className="stats stats-vertical md:stats-horizontal ">
            <div className="stat space-y-2 md:space-y-5">
              <div className="stat-title text-white text-sm md:text-xl">
                Active Apps
              </div>
              <div className="stat-value  md:text-6xl">132+</div>
              <div className="stat-desc text-white text-sm md:text-xl">
                31 More Will Launch
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

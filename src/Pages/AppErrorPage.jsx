import React from "react";
import Navbar from "../Components/Navbar";
import Container from "../Components/Container";
import { Link } from "react-router";
import Footer from "../Components/Footer";
import error from "../assets/App-Error.png";

const AppErrorPage = ({ search }) => {
  return (
    <div>
      <Container>
        <div className="min-h-[80vh] flex flex-col justify-center items-center my-5">
          <img src={error} alt="" />
          <p className="text-2xl md:text-6xl mt-4 font-semibold">
            Opps, {search} not found!
          </p>
          <p className="text-md md:text-2xl my-4">
            The app you are looking for is not available.
          </p>
          <Link
            to="/"
            className="btn bg-gradient-to-r from-[#632ee2] to-[#9f62f2] text-white max-w-100"
          >
            Go back
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AppErrorPage;

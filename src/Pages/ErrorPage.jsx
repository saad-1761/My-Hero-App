import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Container from "../Components/Container";
import error from "../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <div className="min-h-[80vh] flex flex-col justify-center items-center my-5">
          <img src={error} alt="" />
          <p className="text-2xl md:text-6xl mt-4 font-semibold">
            Opps, page not found!
          </p>
          <p className="text-md md:text-2xl my-4">
            The page you are looking for is not available.
          </p>
          <Link
            to="/"
            className="btn bg-gradient-to-r from-[#632ee2] to-[#9f62f2] text-white max-w-100"
          >
            Go back
          </Link>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;

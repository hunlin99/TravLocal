 "use client";

import React from "react";

const HeroSection = () => {
  return (
    <section
      className="HeroSection py-5 vh-100 d-flex align-items-end text-white"
      style={{
        backgroundImage: `url('/TravLocal/image/cover-img.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container h-100 py-5">
        <div className="row h-100">
          <div className="col-lg-8 col-xl-7 col-xxl-6 d-flex flex-column">
            <div className="text-lg-start text-md-center text-sm-center">
              <h1 className="display-5 fw-bolder mb-2">
                Travel Like a Local. <br /> Guide Like a Pro.
              </h1>
              <p className="lead fw-normal text-white-50 mb-4">
                Join a community where you explore new cities, earn rewards, and make lasting memories.
              </p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-lg-start">
                <a className="btn btn-outline-light btn-lg px-4" href="#">App Store</a>
                <a className="btn btn-outline-light btn-lg px-4" href="#">Google Play</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

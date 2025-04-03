"use client";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Page: React.FC = () => {
  useEffect(() => {
    // Import Bootstrap's JS only on the client
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      {/* Hamburger Menu */}
      <input type="checkbox" id="navi-toggle" className="checkbox" />
      <label htmlFor="navi-toggle" className="button">
        <span className="icon">&nbsp;</span>
      </label>
      <div className="background">&nbsp;</div>

      {/* Navigation */}
      <nav className="nav">
        <ul className="list">
          <li className="item"><a className="link">Home page</a></li>
          <li className="item"><a className="link">Our Team</a></li>
          <li className="item"><a className="link">Issue Report</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="bg-dark py-5 vh-100 d-flex align-items-end">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-8 col-xl-7 col-xxl-6 d-flex flex-column justify-content-end">
              <div className="text-lg-start text-md-center text-sm-center">
                <h1 className="display-5 fw-bolder text-white mb-2">
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

      {/* Feature Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row py-5">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="px-5 feature-card col-md-6 col-3">
                <div className="img-container">
                  <img src="" alt="Feature" />
                </div>
                <div className="text-container">
                  <h3>Match with Verified Locals</h3>
                  <div>Connect with trusted guides for authentic experiences.</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="bg-dark vh-100 d-flex justify-content-center align-items-center">
        <div className="container row">
          {["Local guide", "Traveler"].map((role, index) => (
            <div key={index} className="p-5 col-6">
              <div className="card profile-card px-5">
                <div className="card-body text-center">
                  <div className="w-50 rounded-circle profile-img mb-3 bg-dark ratio ratio-1x1 mx-auto">
                    <img src="#" alt="User Profile" />
                  </div>
                  <h3 className="card-title mb-2">John Doe</h3>
                  <p className="card-text text-muted mb-3">{role}</p>
                  <p className="card-text mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-light p-5">
        <h1 className="text-center p-3">FAQ</h1>
        <div className="accordion" id="accordionExample">
          {[1, 2, 3].map((num) => (
            <div key={num} className="accordion-item">
              <h2 className="accordion-header" id={`heading${num}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${num}`}
                  aria-expanded="true"
                  aria-controls={`collapse${num}`}
                >
                  Accordion Item #{num}
                </button>
              </h2>
              <div id={`collapse${num}`} className="accordion-collapse collapse" aria-labelledby={`heading${num}`} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the {num} item's accordion body.</strong> It is hidden by default.
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-dark p-5 vh-50">
        <div className="container d-flex justify-content-between">
          <div className="py-5 col-3">
            <div className="d-grid gap-3 text-white">
              <h3>Download <br /> TravLocal app</h3>
              <a className="btn btn-outline-light btn-lg px-4" href="#">App Store</a>
              <a className="btn btn-outline-light btn-lg px-4" href="#">Google Play</a>
            </div>
          </div>
          <div className="py-5 col-9 text-end">
            <a href="#" className="text-white mx-3">About Us</a>
            <a href="#" className="text-white mx-3">FAQ</a>
            <a href="#" className="text-white mx-3">Contact</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

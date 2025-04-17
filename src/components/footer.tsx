'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <section className="FooterSection p-5 vh-50">
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
  );
};

export default Footer;

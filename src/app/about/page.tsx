"use client";

import Footer from "@/components/footer";
import HamburgerMenu from "@/components/navigation/HamburgerMenu";
import Nav from "@/components/navigation/Nav";

const About = () => {
  return (
    <>
      <HamburgerMenu />

      <Nav />
      {/* Header Section */}
      <header
        className="py-5 bg-image-full"
        style={{ backgroundImage: "url('/TravLocal/image/About-cover-15.png')" }}
      >
        <div className="text-center my-5">
          <img
            src="/TravLocal/image/Logo.png"
            alt="TravLocal Logo"
            className="img-fluid rounded-circle mb-4"
            style={{ width: '150px', height: '150px' }} // Customize as needed
          />

          <h1 className="text-white fs-3 fw-bolder">TravLocal</h1>
          <p className="text-white-50 mb-0">Travel Like a Local. Guide Like a Pro.</p>
        </div>
      </header>

      {/* Section One */}
      <section className="py-5">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2>What is TravLocal?</h2>
              <p className="mb-0">
                TravLocal is a community-driven travel platform designed to connect curious travelers with passionate local guides. Instead of relying on commercial tours, the app uses a unique ticket exchange system where users guide visitors in their own cities to earn tickets, which they can later use for their own travels. This reciprocal model fosters authentic experiences by matching users based on shared interests, languages, and preferred activities, allowing for fully personalized, culturally rich tours.              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <div
        className="py-5 bg-image-full"
        style={{
          backgroundImage: "url('/TravLocal/image/app-mockup-18.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "50vh" // or set a fixed height like "400px"
        }}
      >
        <div style={{ height: "20rem" }}></div>
      </div>

      {/* Section Two */}
      <section className="py-5">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2>Why It Matters</h2>
              <p className="lead">
                TravLocal promotes sustainable tourism by encouraging visits to hidden gems and supporting small, local businesses through strategic partnerships. With a built-in reward system, users can earn points through referrals, check-ins, and achievements, which can be redeemed for tickets, coupons, or gift cards. It’s more than just a travel app—it’s a movement that empowers locals, nurtures real connections, and makes travel more meaningful, affordable, and human.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <div className="container my-5">
          <div className="row justify-content-center text-center">
            <h1 className="mb-5">Our Team</h1>

            {/* Profile Card 1 */}
            <div className="p-5 col-12 col-md-6">
              <div className="card profile-card px-5">
                <div className="card-body text-center">
                  <div className="w-50 rounded-circle profile-img mb-3 bg-dark ratio ratio-1x1 mx-auto overflow-hidden">
                    <img
                      src="/TravLocal/image/guide-1.png"
                      alt="Guide Profile"
                      className="img-fluid object-fit-cover"
                    />
                  </div>
                  <h3 className="card-title mb-2">Ling chang</h3>
                  <p className="card-text text-muted mb-3">Project designer/Web Developer</p>
                </div>
              </div>
            </div>

            {/* Profile Card 2 */}
            <div className="p-5 col-12 col-md-6">
              <div className="card profile-card px-5">
                <div className="card-body text-center">
                  <div className="w-50 rounded-circle profile-img mb-3 bg-dark ratio ratio-1x1 mx-auto overflow-hidden">
                    <img
                      src="/TravLocal/image/guide-2.png"
                      alt="Guide Profile"
                      className="img-fluid object-fit-cover"
                    />
                  </div>
                  <h3 className="card-title mb-2">Nancy Huang</h3>
                  <p className="card-text text-muted mb-3">Project designer/App Interface Designer</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;

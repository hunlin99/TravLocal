
"use client";
import Footer from "@/components/footer";
import HamburgerMenu from "@/components/navigation/HamburgerMenu";
import Nav from "@/components/navigation/Nav";

export default function ContactPage() {
  return (
    <>
    <section className="contactForm p-5">
      <HamburgerMenu />
      <Nav />
    <div className="container py-5">
      <form onSubmit={(e) => e.preventDefault()}>
        <h2 className="mb-4">Contact us</h2>

        <div className="form-outline mb-4">
          <input type="text" id="name" name="name" className="form-control" />
          <label className="form-label" htmlFor="name">Name</label>
        </div>

        <div className="form-outline mb-4">
          <input type="email" id="email" name="email" className="form-control" />
          <label className="form-label" htmlFor="email">Email address</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="subject" name="subject" className="form-control" />
          <label className="form-label" htmlFor="subject">Subject</label>
        </div>

        <div className="form-outline mb-4">
          <textarea className="form-control" id="message" name="message" rows={4}></textarea>
          <label className="form-label" htmlFor="message">Message</label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Send
        </button>
      </form>
    </div>
    </ section>
    <Footer />
    </>
    
  );
}

import Navbar from "./Navbar";
import Property from "./Property";
import Footer from "./Footer";

export default function About() {
  const isNavbarStickyStyleApplied = true;
  return (
    <>
      <Navbar isNavbarStickyStyleApplied={isNavbarStickyStyleApplied} />
      <div className="aboutPage">
        <h1>Charizrad Properties</h1>
        <p>
          Charizard Properties is a showcase project in my web development
          portfolio. It demonstrates my expertise in building real-world
          applications using React.js (including useState, useEffect, useRef,
          and React Router) for the frontend. The backend is powered by an
          Express server with Node.js, and data is managed using MongoDB.
        </p>
      </div>
      <Footer />
    </>
  );
}

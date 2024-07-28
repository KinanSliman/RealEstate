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
          Charizard Properties is not real Real Estate agency, it is a practical
          demonstration to my skills when it comes to real life projects, it is
          built with react js ( useState , useEffect , useRef , React Router )
          in the frontend and an express server with Node js in the backend and
          a mongoDB database
        </p>
      </div>
      <Footer />
    </>
  );
}

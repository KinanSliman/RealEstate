import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

function Navbar({ isNavbarStickyStyleApplied }) {
  const [isSticky, setIsSticky] = useState(false);
  const [isHumburgerActive, setIsHumburgerActive] = useState(false);

  const toggleHumburger = () => {
    setIsHumburgerActive(!isHumburgerActive);
  };
  useEffect(() => {
    if (isNavbarStickyStyleApplied) {
      setIsSticky(true);
    }
  }, []);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (!isNavbarStickyStyleApplied && offset > 2) {
      setIsSticky(true);
    } else if (!isNavbarStickyStyleApplied && offset < 2) {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="logo">
        <img src={logo} alt="logo" />
        <p>Real Estate</p>
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/offplan-page"> Off Plan</Link>
        </li>
        <li>
          <Link to="/buy-page"> Buy</Link>
        </li>
        <li>
          <Link to="/rent-page">Rent</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>

      <div
        className={`NavbarHumburgerLinks ${isHumburgerActive ? "active" : ""}`}
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/offplan-page"> Off Plan</Link>
          </li>
          <li>
            <Link to="/buy-page"> Buy</Link>
          </li>
          <li>
            <Link to="/rent-page">Rent</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </div>

      <div className="humburger" onClick={toggleHumburger}>
        <div className={`firstDiv ${isHumburgerActive ? "active" : ""}`}></div>
        <div className={`secondDiv ${isHumburgerActive ? "active" : ""}`}></div>
        <div className={`thirdDiv ${isHumburgerActive ? "active" : ""}`}></div>
      </div>
      <div className="container">
        <p>Whatsapp</p>
        <button>GET IN TOUCH</button>
      </div>
    </div>
  );
}

export default Navbar;

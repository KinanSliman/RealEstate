import heroBackgroundImage from "../assets/images/heroBackground.jpg";
import { useState, useEffect, useRef } from "react";
import Filter from "./Filter";

function Hero() {
  const [isStickyHero, setIsStickyHero] = useState(false);
  const containerRef = useRef(null);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 2) {
      setIsStickyHero(true);
    } else {
      setIsStickyHero(false);
    }
  };

  // Typing effect function
  const typingEffect = (element, text, speed) => {
    let i = 0;
    const startEffect = setInterval(() => {
      element.textContent = text.substring(0, i + 1);
      i++;
      if (i === text.length) {
        clearInterval(startEffect);
        element.classList.remove("cursor-blink");
      }
    }, speed);
  };

  // Hook to add/remove scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Hook to apply typing effect
  useEffect(() => {
    if (containerRef.current) {
      const heading = containerRef.current.querySelector("h1");
      if (heading) {
        const headingText = "GET READY FOR YOUR NEW HOUSE";
        heading.textContent = "";
        heading.classList.add("cursor-blink");
        typingEffect(heading, headingText, 100);
      }
    }
  }, [containerRef]);

  return (
    <div className={`hero ${isStickyHero ? "stickyHero" : ""}`}>
      <img src={heroBackgroundImage} alt="background image" />
      <div className="greyOverlayAboveHeroBackground"></div>
      <div className="hero__content" ref={containerRef}>
        <p className="pOffer">Just 10% for 12 months</p>
        <h1></h1>
        <p className="pIntroduction">
          Discover unparalleled luxury at our exquisite properties. Secure your
          sanctuary of sophisticated living today, where every detail is crafted
          to offer you the ultimate in elegance and comfort.
        </p>
        <button> Learn More</button>
        <Filter />
      </div>
    </div>
  );
}

export default Hero;

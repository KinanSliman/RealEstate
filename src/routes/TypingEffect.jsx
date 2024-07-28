import heroBackgroundImage from "./assets/wallpaper.jpg";
import { useRef, useEffect } from "react";
import AnimatedBox from "./AnimatedBox";

function typingEffect() {
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      const heading = containerRef.current.querySelector("h1");
      const paragraph = containerRef.current.querySelector("p");
      const typingEffect = (element, text, speed) => {
        let i = 0;
        const startEffect = setInterval(() => {
          element.textContent = text.subString(0, i + 1);
          i++;
          if (i === text.length) {
            clearInterval(startEffect);
          }
        }, speed);
      };

      if (heading && paragraph) {
        const headingText = "Premiere Assetes";
        const paragraphText = "your way to be a smart dumb ass";
        // Clear existing text content to prevent duplication
        heading.textContent = "";
        paragraph.textContent = "";

        heading.classList.add("cursor-blink"); // Add the blinking cursor class before typing
        paragraph.classList.add("cursor-blink");

        typingEffect(heading, headingText, 100);
        setTimeout(() => {
          typingEffect(paragraph, paragraphText, 100);
        }, headingText.length * 100);
      }
    }
  }, [containerRef]);

  return (
    <div className="hero">
      <img src={heroBackgroundImage} alt="" />
      <div className="hero__main">
        <h1></h1>
        <p></p>
        <AnimatedBox />
      </div>
    </div>
  );
}

export default typingEffect;

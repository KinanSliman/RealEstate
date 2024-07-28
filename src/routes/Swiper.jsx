import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
register();

function Swiper() {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <div className="SwiperComponent">
      <swiper-container
        slides-per-view="1"
        grid-rows="1"
        mousewheel-force-to-axis="true"
        speed="1000"
        loop="true"
        navigation="true"
        pagination="true"
        scrollbar="true"
        autoplay-delay="3000" // Updated this line
        ref={swiperElRef}
      >
        <swiper-slide>
          <div className="slide1">Slider1</div>
        </swiper-slide>
        <swiper-slide>
          <div className="slide2">Slider2</div>
        </swiper-slide>
        <swiper-slide>
          <div className="slide3">Slider3</div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
}

export default Swiper;

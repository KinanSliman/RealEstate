import Navbar from "./Navbar";
import Hero from "./Hero";
import Categories from "./Categories";
import Property from "./Property";
import Faq from "./Faq";
import Swiper from "./Swiper";
import Footer from "./Footer";

function App() {
  const isNavbarStickyStyleApplied = false;
  return (
    <div className="app">
      <Navbar isNavbarStickyStyleApplied={isNavbarStickyStyleApplied} />
      <Hero />
      <Categories />
      <Property />
      <Faq />
      <Footer />
    </div>
  );
}
export default App;

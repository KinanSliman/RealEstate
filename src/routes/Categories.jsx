import OffPlanImage from "../assets/images/off-plan.jpg";
import BuyImage from "../assets/images/buy.jpg";
import RentImage from "../assets/images/rent.jpg";
import CommercialImage from "../assets/images/commercial.webp";

function Categories() {
  return (
    <>
      <h3 className="categoriesHeading">Categories</h3>
      <div className="categories">
        <div className="category">
          <div className="imageContainer">
            <img src={OffPlanImage} alt="category" loading="lazy" />
          </div>

          <h1>Off Plan</h1>
          <p>Invest in Future Opportunities</p>
        </div>

        <div className="category">
          <div className="imageContainer">
            <img src={BuyImage} alt="category" loading="lazy" />
          </div>
          <h1>Buy</h1>
          <p>Find your dream home in a ready property</p>
        </div>

        <div className="category">
          <div className="imageContainer">
            <img src={RentImage} alt="category" loading="lazy" />
          </div>
          <h1>Rent</h1>
          <p>Discover Your Ideal Rental Home</p>
        </div>

        <div className="category">
          <div className="imageContainer">
            <img src={CommercialImage} alt="category" loading="lazy" />
          </div>
          <h1>Commercial</h1>
          <p>Explore your Business Spaces</p>
        </div>
      </div>
    </>
  );
}

export default Categories;

import OfficeImage from "../assets/images/office.jpg";
import LandImage from "../assets/images/land.png";
import LocationImage from "../assets/images/location.jpg";

function Property() {
  return (
    <>
      <h3 className="propertiesHeading">All types of properties</h3>
      <div className="properties">
        <div className="property firstImage">
          <img src={OfficeImage} alt="office" />
          <p>office</p>
        </div>

        <div className="property secondImage">
          <img src={LocationImage} alt="location" />
          <p>Apartment</p>
        </div>

        <div className="property thirdImage">
          <img src={LandImage} alt="land" />
          <p>Villa</p>
        </div>
      </div>
    </>
  );
}

export default Property;

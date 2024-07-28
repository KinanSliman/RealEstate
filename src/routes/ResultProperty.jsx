export default function ResultProperty({ property }) {
  return (
    <div className="resultPage">
      <div className="propertyResult">
        <div className="propertyResult__image">
          <img src={property.image} alt="an image" loading="lazy" />
        </div>
        <div className="propertyResult__description">
          <p> {property.location}</p>
          <h1>
            {property.price} {property.currency}
          </h1>
          <h3>Bathrooms Number: {property.bathroomNumber}</h3>
          <h3>Bedrooms Number: {property.bedroomNumber}</h3>
          <p>has kitchen? {property.kitchen}</p>
          <p>{property.description}</p>
          <button> Learn More</button>
        </div>
      </div>
    </div>
  );
}

import Navbar from "./Navbar";
import Filter from "./Filter";
import Footer from "./Footer";
import ResultProperty from "./ResultProperty";
import { useContext, useState } from "react";
import PropertiesContext from "./PropertiesContext";

export default function RentPage() {
  const isNavbarStickyStyleApplied = true;
  const { properties, isLoading, error } = useContext(PropertiesContext);
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const logFilters = (filters) => {
    console.log("applied filters are", filters);
    setFilteredProperties(
      properties.filter((property) => filters.includes(property.type))
    );
  };
  const clearFilters = () => {
    setFilteredProperties(properties);
  };

  return (
    <>
      <Navbar isNavbarStickyStyleApplied={isNavbarStickyStyleApplied} />
      <Filter logFilters={logFilters} clearFilters={clearFilters} />
      <h1>{filteredProperties.length} results have been found for renting</h1>
      {filteredProperties.map((property) => (
        <ResultProperty key={property._id} property={property} />
      ))}
      <Footer />
    </>
  );
}

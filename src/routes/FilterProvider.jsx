import { createContext, useContext, useState, useEffect } from "react";
import PropertiesContext from "./PropertiesContext"; // Import the PropertiesContext

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { properties } = useContext(PropertiesContext);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [initialPriceRange, setInitialPriceRange] = useState([0, 100]);

  useEffect(() => {
    if (properties.length > 0) {
      const prices = properties.map((property) => parseInt(property.price, 10));
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      setInitialPriceRange([minPrice, maxPrice]);
      setFilteredProperties(properties);
    }
  }, [properties]);

  const logFilters = (filters) => {
    const filtered = properties.filter((property) => {
      const propertyPrice = parseInt(property.price, 10);
      const matchesPropertyType =
        filters.propertyTypes.length === 0 ||
        filters.propertyTypes.includes(property.type);
      const matchesPriceRange =
        propertyPrice >= filters.priceRange[0] &&
        propertyPrice <= filters.priceRange[1];
      const matchesPropertyOption =
        filters.propertyOption === "" ||
        property.contractType === filters.propertyOption;
      return matchesPropertyType && matchesPriceRange && matchesPropertyOption;
    });
    setFilteredProperties(filtered);
  };

  const clearFilters = () => {
    setFilteredProperties(properties);
  };

  return (
    <FilterContext.Provider
      value={{
        filteredProperties,
        initialPriceRange,
        logFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);

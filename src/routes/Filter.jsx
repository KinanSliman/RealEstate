import { useState, useEffect } from "react";
import Price from "./Price";

function Filter({
  logFilters,
  clearFilters,
  initialPriceRange,
  onApplyFilters,
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    apartment: false,
    villa: false,
    house: false,
  });

  const [priceRange, setPriceRange] = useState(initialPriceRange);
  const [propertyOption, setPropertyOption] = useState("");

  useEffect(() => {
    setPriceRange(initialPriceRange);
  }, [initialPriceRange]);

  const handlePriceChange = (newValues) => {
    setPriceRange(newValues);
  };

  const togglePropertyTypes = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const handlePropertyOptionClick = (option) => {
    setPropertyOption(option);
  };

  const handleSearch = () => {
    const activeFilters = {
      propertyTypes: Object.keys(selectedFilters).filter(
        (key) => selectedFilters[key]
      ),
      priceRange,
      propertyOption,
    };
    logFilters(activeFilters);
    setIsCollapsed(false);
    if (onApplyFilters) {
      onApplyFilters();
    }
  };

  const handleClearFilters = () => {
    setSelectedFilters({
      apartment: false,
      villa: false,
      house: false,
    });
    setPriceRange(initialPriceRange);
    setPropertyOption("");
    clearFilters();
    setIsCollapsed(false);
  };

  return (
    <div className="filter">
      <div className="filter__parameters">
        <div
          className="propertyTypeFilterWrapper"
          onClick={togglePropertyTypes}
        >
          <h4>Filters</h4>
          <div
            className={`propertyTypeFilterContainerForCheckboxes ${
              isCollapsed ? "PropertyTypesVisibleCheckboxes" : ""
            }`}
          >
            <input
              type="checkbox"
              id="apartment"
              name="apartment"
              checked={selectedFilters.apartment}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="apartment">apartment</label>
            <br />
            <input
              type="checkbox"
              id="villa"
              name="villa"
              checked={selectedFilters.villa}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="villa">villa</label>
            <br />
            <input
              type="checkbox"
              id="house"
              name="house"
              checked={selectedFilters.house}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="house">house</label>

            <div className="propertyOptions">
              <button onClick={() => handlePropertyOptionClick("buy")}>
                buy
              </button>
              <button onClick={() => handlePropertyOptionClick("rent")}>
                rent
              </button>
              <button onClick={() => handlePropertyOptionClick("offPlan")}>
                off plan
              </button>
            </div>
            <Price
              initialPriceRange={priceRange}
              onPriceChange={handlePriceChange}
            />
          </div>
        </div>
      </div>
      <button onClick={handleSearch}>Apply Filters</button>
      <button onClick={handleClearFilters}>Clear filters</button>
    </div>
  );
}

export default Filter;

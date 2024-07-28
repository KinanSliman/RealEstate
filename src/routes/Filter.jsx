import { useState } from "react";

function Filter({ logFilters, clearFilters }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    apartment: false,
    villa: false,
    house: false,
  });

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

  const handleSearch = () => {
    logFilters(
      Object.keys(selectedFilters).filter((key) => selectedFilters[key])
    );
    setIsCollapsed(false);
  };

  const handleClearFilters = () => {
    setSelectedFilters({
      apartment: false,
      villa: false,
      house: false,
    });
    clearFilters();
    setIsCollapsed(false);
  };

  return (
    <div className="filter">
      <div className="filter__propertyType">
        <p>Buy</p>
        <p>Rent</p>
        <p>Off plan</p>
      </div>
      <div className="filter__parameters">
        <div
          className="propertyTypeFilterWrapper"
          onClick={togglePropertyTypes}
        >
          <h4>Filter By Type</h4>
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
          </div>
        </div>
      </div>
      <button onClick={handleSearch}>Apply Filters</button>
      <button onClick={handleClearFilters}>Clear filters</button>
    </div>
  );
}

export default Filter;

import { useState, useEffect } from "react";
import { Range } from "react-range";

function Price({ initialPriceRange, onPriceChange }) {
  const [values, setValues] = useState(initialPriceRange);
  const [minPrice, setMinPrice] = useState(initialPriceRange[0]);
  const [maxPrice, setMaxPrice] = useState(initialPriceRange[1]);

  useEffect(() => {
    setValues(initialPriceRange);
    setMinPrice(initialPriceRange[0]);
    setMaxPrice(initialPriceRange[1]);
  }, [initialPriceRange]);

  const handlePriceChange = (newValues) => {
    setValues(newValues);
    onPriceChange(newValues);
  };

  return (
    <div className="price">
      <p className="selected-range">
        {values[0]} to {values[1]} AED
      </p>
      <Range
        step={1}
        min={minPrice}
        max={maxPrice}
        values={values}
        onChange={handlePriceChange}
        renderTrack={({ props, children }) => (
          <div {...props} className="range-track" ref={props.ref}>
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div {...props} className="range-thumb" ref={props.ref} />
        )}
      />
    </div>
  );
}

export default Price;

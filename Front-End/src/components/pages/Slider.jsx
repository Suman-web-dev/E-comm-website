// src/ui/slider.jsx
import React from "react";

const Slider = ({ defaultValue, min, max, step, onValueChange }) => {
  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    onValueChange([value]);
  };

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      defaultValue={defaultValue[0]}
      onChange={handleChange}
      className="w-full"
    />
  );
};

export default Slider;
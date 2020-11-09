import React from 'react';
import Slider from 'react-smooth-range-input';

function AgeOfTheYoungest() {
  return <Slider value={1} min={1} max={18} />;
}

export default AgeOfTheYoungest;

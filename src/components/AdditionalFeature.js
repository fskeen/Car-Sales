import React from 'react';

const AdditionalFeature = ({feature, add}) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => {add(feature)}}>Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;

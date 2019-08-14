import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = ({availableFeatures, add}) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {availableFeatures.length ? (
        <ol type="1">
          {availableFeatures.map(item => (
            <AdditionalFeature
              key={item.id}
              feature={item}
              add={add} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;

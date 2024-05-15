import React from 'react';

const City = ({city}) => {
  return (
    <div>
      {city && (
        <div>
          <h1>{city.name}</h1>
          <h2>{city.weather[0].main}</h2>
        </div>
      )}
    </div>
  );
};

export default City;

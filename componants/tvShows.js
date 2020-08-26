import React from 'react';

const tvShows = props => {
  const { name, image } = props;

  return (
    <div id="tvShows">
      <li>
        <h1>{name}</h1>
        <img src={image} alt={name} />
      </li>
    </div>
  );
};

export default tvShows;

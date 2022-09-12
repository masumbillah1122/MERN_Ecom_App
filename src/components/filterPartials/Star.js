import React from 'react'

const Star = ({ filterResultRatings, rating }) => {
  return (
    <div className="f-filterDiv">
      <div className="f-buttons">
        <button className="f-button" onClick={() => filterResultRatings()}>
          All Star
        </button>
        {rating.map((star) => (
          <button
            className="f-button star"
            onClick={() => filterResultRatings(star.label)}
            key={star._id}
          >
            {star.label}&#9733;
          </button>
        ))}
      </div>
    </div>
  );
};

export default Star
import React from "react";

export const Tile = (props) => {
  const { obj } = props;
  const objects = Object.values(obj);

  return (
    <div className="tile-container">
    {objects?.map((item, index) => (
      index === 0 ? <p key={index} className="tile-title">{item}</p> : <p key={index} className="tile">{item}</p>
    ))}
    </div>
  );
};

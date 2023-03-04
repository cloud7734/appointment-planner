import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  const { arr } = props;
  
  return (
    <div>
      {arr?.map((item, index) => (
        <Tile key={index} obj={item} />
      ))}
    </div>
  );
};

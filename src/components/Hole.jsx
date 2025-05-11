import React from "react";
import Mole from "./Mole";

const Hole = ({ index, hasMole, onWhack }) => {
  return (
    <div
      style={{
        width: 60,
        height: 60,
        border: "2px solid black",
        margin: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {hasMole && <Mole onWhack={onWhack} />}
    </div>
  );
};

export default Hole;

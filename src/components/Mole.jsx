import React from "react";

const Mole = ({ onWhack }) => {
  return (
    <div
      onClick={onWhack}
      style={{
        width: 50,
        height: 50,
        borderRadius: "50%",
      }}
    >
      <img src="mole.png" alt="mole picture" />
    </div>
  );
};

export default Mole;

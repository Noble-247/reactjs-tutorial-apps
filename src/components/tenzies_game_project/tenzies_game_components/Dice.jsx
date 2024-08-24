import React from "react";

function Dice(props) {
  const dieIsheld =
    props.isHeld === true
      ? "btn btn-success btn-lg d-block m-3 tenzies-font"
      : "btn btn-outline-dark btn-lg d-block m-3 tenzies-font";

  return (
    <button onClick={() => props.holdDice(props.id)} className={dieIsheld}>
      {props.value}
    </button>
  );
}

export default Dice;

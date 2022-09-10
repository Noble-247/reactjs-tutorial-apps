import React from "react";
import Boxes from "../Database/boxesTest";
import BoxTest from "./BoxTest";

function AppTest() {
  const [boxes, setBoxes] = React.useState(Boxes);

  function toggleState(id) {
    // console.log(id);
    setBoxes((prevBoxes) => {
      return prevBoxes.map((box) => {
        return box.id === id ? { ...box, on: !box.on } : box;
      });
    });
  }

  const boxItems = boxes.map((box) => {
    return (
      <BoxTest key={box.id} on={box.on} boxID={box.id} toggle={toggleState} />
    );
  });

  return (
    <div>
      <h1 className='text-center p-4 d-flex'>{boxItems}</h1>
    </div>
  );
}

export default AppTest;

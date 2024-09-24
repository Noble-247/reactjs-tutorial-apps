import { useEffect, useState } from "react";

function UseEffect() {
  const [bgColor, setBgColor] = useState(false);

  useEffect(() => {
    setBgColor(false);
  }, []);

  return (
    <div className={`${bgColor ? "bg-dark" : "bg-success"} display-3`}>
      UseEffect
    </div>
  );
}

export default UseEffect;

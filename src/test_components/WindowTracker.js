import React from "react";

function WindowTracker() {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    function watchWindowSize() {
      console.log("setting up.....");
      setWindowSize((prevWindowSize) => ({
        ...windowSize,
        width: window.innerWidth,
        height: window.innerHeight,
      }));
    }
    window.addEventListener("resize", watchWindowSize);

    return function () {
      console.log("cleaning up....");
      window.removeEventListener("resize", watchWindowSize);
    };
  }, []);

  return (
    <div>
      <p>Window Width: {windowSize.width}</p>
      <p>Window Height:{windowSize.height}</p>
    </div>
  );
}

export default WindowTracker;

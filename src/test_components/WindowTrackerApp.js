import React from "react";
import WindowTracker from "./WindowTracker";

function WindowTrackerApp() {
  const [show, setShow] = React.useState(true);

  function toggle() {
    setShow((prevShow) => !prevShow);
  }

  return (
    <div className='container my-5 p-3 bg-purple text-white'>
      <button onClick={toggle} className='btn btn-primary d-block mx-auto'>
        Toggle WindowTracker
      </button>
      {show && <WindowTracker />}
    </div>
  );
}

export default WindowTrackerApp;

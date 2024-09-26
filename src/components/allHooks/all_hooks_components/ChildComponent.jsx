/* eslint-disable react/display-name */
import { forwardRef, useImperativeHandle, useState } from "react";

const ChildComponent = forwardRef((props, ref) => {
  const [buttonState, setButtonState] = useState(false);

  useImperativeHandle(ref, () => ({
    handleClick() {
      setButtonState(!buttonState);
    },
  }));

  return (
    <section>
      <button
        onClick={() => setButtonState(!buttonState)}
        className="btn btn-primary"
      >
        Button From Child Component
      </button>
      <p className="my-5">
        Button Click Action:{" "}
        {buttonState && (
          <span className="fw-bolder text-info"> Button Set To True!</span>
        )}{" "}
        {!buttonState && (
          <span className="fw-bolder text-success">Button Set To False!</span>
        )}
      </p>
    </section>
  );
});

export default ChildComponent;

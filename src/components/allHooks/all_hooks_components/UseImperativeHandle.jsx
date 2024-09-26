import { useRef } from "react";
import ChildComponent from "./ChildComponent";

function UseImperativeHandle() {
  const buttonRef = useRef(null);
  return (
    <section>
      <h2>USEIMPERATIVEHANDLE</h2>
      <p>
        This hook enables you to change the state of a child component from
        outside the child component (i.e from a parent component)
      </p>
      <div className="my-3">
        <button
          onClick={() => buttonRef.current.handleClick()}
          className="btn btn-secondary"
        >
          Button From Parent Component
        </button>
      </div>
      <div className="my-3">
        <ChildComponent ref={buttonRef} />
      </div>
    </section>
  );
}

export default UseImperativeHandle;

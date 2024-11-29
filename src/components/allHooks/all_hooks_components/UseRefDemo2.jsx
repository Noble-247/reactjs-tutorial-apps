// import UseRef from "../../../test_components/UseRef";

import { useRef } from "react";

function UseRefDemo2() {
  const buttonRef = useRef(null);
  function onClick() {
    console.log(buttonRef.current.textContent);
    buttonRef.current.textContent = "Clicked!";
    // buttonRef.current.textContent.style.color = "Clicked!";
  }

  const inputRefForUsername = useRef(null);
  const inputRefForEmail = useRef(null);
  function clearInputField() {
    // inputRefForUsername.current.value = "";
    let inputArray = [inputRefForUsername, inputRefForEmail];
    inputArray.map((input) => (input.current.value = ""));
  }

  return (
    <section className="m-5">
      <h2>USEREF</h2>
      <p>
        Here er use the useRef hook to target and clear the input fields on
        &quot;click of the clear fields&quot; button
      </p>
      {/* <UseRef /> */}
      <button onClick={onClick} ref={buttonRef} className="btn btn-dark">
        Click Me!
      </button>
      <div className="my-3">
        <label htmlFor="username" className="form-label">
          Name
        </label>
        <input
          ref={inputRefForUsername}
          type="text"
          className="form-control"
          name="username"
          id="username"
          aria-describedby="helpId"
          placeholder="Enter Your Name"
        />
        <small id="helpId" className="form-text text-muted">
          This is a required field
        </small>
      </div>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Email
        </label>
        <input
          ref={inputRefForEmail}
          type="email"
          className="form-control"
          name="username"
          id="username"
          aria-describedby="helpId"
          placeholder="Enter Your Name"
        />
        <small id="helpId" className="form-text text-muted">
          This is a required field
        </small>
      </div>
      <div className="mb-3">
        <button
          onClick={clearInputField}
          type="button"
          className="btn btn-danger"
        >
          Clear All Fields
        </button>
      </div>
    </section>
  );
}

export default UseRefDemo2;

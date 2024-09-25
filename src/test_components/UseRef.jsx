import { useEffect, useRef, useState } from "react";

function UseRef() {
  // input ref
  const formInputRef = useRef(null);
  function focusInput() {
    formInputRef.current.focus();
  }

  // Textarea ref
  const formTextAreaRef = useRef(null);
  function focusTextArea() {
    formTextAreaRef.current.focus();
  }

  // Generate incremental IDs with useRef
  const idRef = useRef(1);
  const nameInputRef = useRef(null);
  const [names, setNames] = useState([
    { id: idRef.current++, name: "Emmanuel" },
    { id: idRef.current++, name: "Goodness" },
  ]);
  function addName(event) {
    event.preventDefault();
    setNames([
      ...names,
      { id: idRef.current++, name: nameInputRef.current.value },
    ]);
    nameInputRef.current.value = "";
  }

  useEffect(() => {
    focusTextArea();
  });

  return (
    <div className="mt-5 w-75 mx-auto text-center">
      <h3>Using useRef to access underlying DOM</h3>
      <input
        className="form-control"
        ref={formInputRef}
        type="text"
        name="name"
        id="name"
      />
      <button className="btn btn-dark d-inline-block mt-4" onClick={focusInput}>
        Focus Input
      </button>
      <textarea
        className="d-block form-control mt-5"
        ref={formTextAreaRef}
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="your message here....."
      ></textarea>

      <div className="mt-5 border p-4">
        <div>
          {names.map((name) => (
            <p key={name.id}>
              <span>{name.id}</span> <span>{name.name}</span>
            </p>
          ))}
        </div>
        <form onSubmit={addName}>
          <input className="form-control" type="text" ref={nameInputRef} />
          <button className="btn btn-dark mt-3" type="submit">
            Add Name
          </button>
        </form>
      </div>
    </div>
  );
}

export default UseRef;

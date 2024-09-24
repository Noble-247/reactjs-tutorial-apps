import { useState } from "react";

function UseState() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("Hello");

  function incrementValue() {
    setCounter(counter + 1);
    console.log(counter);
  }

  function updateValue(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className='p-5'>
      <h2>USE STATE</h2>
      <article className='m-5'>
        <button className='btn btn-dark' onClick={incrementValue}>
          INCREMENT
        </button>
        <button className='btn btn-outline-dark ms-3'>{counter}</button>
      </article>

      <article className='m-5'>
        <div className='mb-3'>
          <label htmlFor='' className='form-label'>
            Name
          </label>
          <input
            onChange={updateValue}
            type='text'
            className='form-control'
            aria-describedby='helpId'
            placeholder='Enter Your Name'
            value={inputValue}
          />
          <small id='helpId' className='form-text text-muted'>
            Enter Your Name
          </small>
          <p>{inputValue}</p>
        </div>
      </article>
    </div>
  );
}

export default UseState;

import React, { useReducer } from "react";
/* import { Container, Form, FormControl } from "react-bootstrap"; */

function UseReducer2() {
  // Define the reducer - (can be imported)
  const reducer = (state, action) => {
    switch (action.type) {
      case "newUserInput":
        return { ...state, userInput: action.payload };
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "toggleColor":
        return { ...state, color: !state.color };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    userInput: "",
    color: false,
  });

  //   Action definition
  const ACTION = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    NEW_USER_INPUT: "newUserInput",
    TOGGLE_COLOR: "toggleColor",
  };

  return (
    <main
      style={{ color: state.color ? "#fff" : "#fff952" }}
      className='p-4 my-3 border border-dark bg-dark'
    >
      <h2>UseReducer</h2>
      <div className='container'>
        <form>
          <div className='my-4 form-group'>
            <input
              className='form-control'
              type='text'
              value={state.userInput}
              onChange={(e) =>
                dispatch({
                  type: ACTION.NEW_USER_INPUT,
                  payload: e.target.value,
                })
              }
            />
          </div>
        </form>
        <h4 className='text-center'>{state.count}</h4>
        <section className='d-flex justify-content-center'>
          <button
            className='btn btn-secondary d-block w-25 mx-2'
            onClick={() => dispatch({ type: ACTION.INCREMENT })}
          >
            +
          </button>
          <button
            className='btn btn-danger d-block w-25 mx-2'
            onClick={() => dispatch({ type: ACTION.DECREMENT })}
          >
            -
          </button>
          <button
            className='btn btn-outline-light d-block w-25 mx-2'
            onClick={() => dispatch({ type: ACTION.TOGGLE_COLOR })}
          >
            color
          </button>
        </section>
        <p className='text-center mt-3'> {state.userInput}</p>
      </div>
    </main>
  );
}

export default UseReducer2;

/* 
CODE FOR USESTATE

const [userInput, setUserInput] = useState("");
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(false);
  return (
    <main
      style={{ color: color ? "#fff" : "#fff952" }}
      className='p-4 my-3 border border-dark bg-dark'
    >
      <h2>UseReducer</h2>
      <Container>
        <Form>
          <Form.Group className='my-4'>
            <FormControl
              type='text'
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            ></FormControl>
          </Form.Group>
        </Form>
        <h4 className='text-center'>{count}</h4>
        <section className='d-flex justify-content-center'>
          <button
            className='btn btn-secondary d-block w-25 mx-2'
            onClick={() => setCount((prev) => prev + 1)}
          >
            +
          </button>
          <button
            className='btn btn-danger d-block w-25 mx-2'
            onClick={() => setCount((prev) => prev - 1)}
          >
            -
          </button>
          <button
            className='btn btn-outline-light d-block w-25 mx-2'
            onClick={() => setColor((prev) => !prev)}
          >
            color
          </button>
        </section>
        <p className='text-center mt-3'> {userInput}</p>
      </Container>
    </main>


*/

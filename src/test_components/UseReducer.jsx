import React, { useReducer } from "react";

function UseReducer() {
  const divStyles = {
    width: "80%",
    margin: "0px auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  };

  function reducer(state, action) {
    if (action.type === "buy_ingredients") {
      return { money: state.money - 10 };
    }
    if (action.type === "sell_a_meal") {
      return { money: state.money + 10 };
    }
    if (action.type === "celebrity_visit") {
      return { money: state.money + 500 };
    }
  }

  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const ACTION = {
    BUY_INGREDIENTS: "buy_ingredients",
    SELL_A_MEAL: "sell_a_meal",
    CELEBRITY_VISIT: "celebrity_visit",
  };

  return (
    <div style={divStyles}>
      <h1>Wallet: {state.money}</h1>
      <div className='d-flex gap-5'>
        <button
          className='d-block w-auto btn btn-dark'
          onClick={() => dispatch({ type: ACTION.BUY_INGREDIENTS })}
        >
          Shopping for veggies
        </button>
        <button
          className='d-block w-auto btn btn-dark'
          onClick={() => dispatch({ type: ACTION.SELL_A_MEAL })}
        >
          Serve a meal to the customer
        </button>
        <button
          className='d-block w-auto btn btn-dark'
          onClick={() => dispatch({ type: ACTION.CELEBRITY_VISIT })}
        >
          Celebrity visit
        </button>
      </div>
    </div>
  );
}

export default UseReducer;

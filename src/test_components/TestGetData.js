import React from "react";

function TestGetData() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data))
      .catch((error) => console.log(error));
    /*  return () => {
        cleanup
    }; */
  }, [count]);

  function incrementValue() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className='container'>
      <h4>Display Test API Data</h4>
      <p>{JSON.stringify(starWarsData, null, 2)}</p>
      <p className='lead'>The Count is {count}</p>
      <button onClick={incrementValue} className='btn btn-primary'>
        Get Next Character
      </button>
    </div>
  );
}

export default TestGetData;

/* eslint-disable react/prop-types */
import { useState } from "react";

function Parent() {
  const [user, setUser] = useState({
    name: "Emmanuel Ekpobimi",
    occupation: "Frontend Developer",
    location: "Nigeria",
    salary: "$70,000.00",
  });
  return (
    <div className='container' style={{ marginTop: "20px" }}>
      <p>Parent Component where state is declared</p>

      <h4>Name: {user.name}</h4>
      <Child user={user} setUser={setUser} />
    </div>
  );
}

function Child({ user, setUser }) {
  return (
    <div className='container' style={{ marginTop: "20px" }}>
      <p>
        Child Component does not need the state prop, but has to send it down to
        the GrandChild component from the parent
      </p>
      <GrandChild user={user} setUser={setUser} />
    </div>
  );
}

function GrandChild({ user, setUser }) {
  return (
    <div className='container' style={{ marginTop: "20px" }}>
      <small>
        The GrandChild component recieves the the prop from the child component
      </small>
      <p>Name: {user.name}</p>
      <p>Location: {user.location}</p>
      <p>Occupation: {user.occupation}</p>
      <p>Salary per annum: {user.salary}</p>

      <button onClick={() => setUser({ ...user, salary: "$80,000.00" })}>
        Set Salary
      </button>
    </div>
  );
}

function PropsDrillingWithUseState() {
  return (
    <div>
      <Parent />
    </div>
  );
}

export default PropsDrillingWithUseState;

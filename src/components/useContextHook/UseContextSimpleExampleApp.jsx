/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

// Create UserContext
const UserContext = createContext(null);

function Parent() {
  const [user, setUser] = useState({
    name: "Emmanuel Ekpobimi",
    occupation: "Frontend Developer",
    location: "Nigeria",
    salary: "$70,000.00",
  });
  return (
    //Wrap all components with the specific ContextProvider
    <UserContext.Provider value={{ user, setUser }}>
      <div className='container' style={{ marginTop: "20px" }}>
        <p>Parent Component where state is declared</p>

        <h4>Name: {user.name}</h4>
        <Child />
        <GrandChild />
      </div>
    </UserContext.Provider>
  );
}

function Child() {
  return (
    <div className='container' style={{ marginTop: "20px" }}>
      <h3>
        Child Component does not have to send the state to the grand child
      </h3>
    </div>
  );
}

function GrandChild() {
  // Extract the state from the from the UserContext via the useContext hook
  const { user, setUser } = useContext(UserContext);
  return (
    <div className='container' style={{ marginTop: "20px" }}>
      <h3>
        The GrandChild component recieves the state straight from the parent
        component via the Context API
      </h3>
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

function UseContextSimpleExampleApp() {
  return (
    <div>
      <Parent />
    </div>
  );
}

export default UseContextSimpleExampleApp;

import React, { useState } from "react";

function ReactBasics() {
  const styles = {
    width: '80%',
    maxWidth: '900px',
    textAlign: 'center',
    margin: 'auto',
  };

  const names = ["Emmanual", "John", "Daniel"];
  const [user1, user2, user3] = names;

  const details = {
    name: user1,
    occupation: "Frontend Developer",
    salary: "$3000",
  };
  const { name, occupation, salary } = details;

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div style={styles}>
      <h2>TIME: {time}</h2>
      <div>
        <h3>Name: {name}</h3>
        <h3>Occupation: {occupation}</h3>
        <h3>Salary: {salary}</h3>
      </div>
      <h3>{user2}</h3>
      <h3>{user3}</h3>
    </div>
  );
}

export default ReactBasics;

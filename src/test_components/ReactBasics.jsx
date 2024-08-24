import { useState } from "react";

function ReactBasics() {
  const names = ["Emmanual Ekpobimi", "Charles Akujuobi", "Ruth Sunday"];
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
    <div
      style={{ height: "100vh" }}
      className="px-5 text-center py-2 d-flex flex-column align-items-center justify-content-center"
    >
      <div>
        <h2>TIME: {time}</h2>
        <div>
          <h3>Lecturer: {name}</h3>
          <h3>Occupation: {occupation}</h3>
          <h3>Salary: {salary}</h3>
        </div>
        <h3>Assistant Lecturer: {user2}</h3>
        <h3>Frontdesk Executive: {user3}</h3>
      </div>
      <h2 className="fw-light">
        Hello, Welcome to my React Tutorial Exercise. This app has multiple apps
        sitted within it. You can locate these apps by clicking on the
        corresponding links in the navigation bar above, which will in turn,
        open the corresponding app.
      </h2>

      <p>Happy Learning!!!</p>
    </div>
  );
}

export default ReactBasics;

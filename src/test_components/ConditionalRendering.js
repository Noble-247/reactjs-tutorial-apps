import React from "react";

function ConditionalRendering() {
  const styles = {
    width: "80%",
    maxWidth: "900px",
    textAlign: "center",
    margin: "auto",
  };

  const time = new Date();
  const day = time.toLocaleString("en-us", { weekday: "long" });
  const morning = time.getHours() >= 6 && time.getHours() <= 12;
  let dayMessage;

  if (day.toLowerCase() === "monday") {
    dayMessage = `Happy ${day}`;
  } else if (day.toLowerCase() === "tuesday") {
    dayMessage = `${day}, four days to go`;
  } else if (day.toLowerCase() === "wednesday") {
    dayMessage = `${day} half way there`;
  } else if (day.toLowerCase() === "thursday") {
    dayMessage = `${day}, start planning your weekend`;
  } else if (day.toLowerCase() === "friday") {
    dayMessage = `Woo Hoo, the weekend is close by`;
  } else {
    dayMessage = "At Last!! The weekend is here 😀... have fun";
  }

  return (
    <div style={styles}>
      <h2>{dayMessage}</h2>
      {morning ? <h3>Have you had breakfast?</h3> : " "}
    </div>
  );
}

export default ConditionalRendering;

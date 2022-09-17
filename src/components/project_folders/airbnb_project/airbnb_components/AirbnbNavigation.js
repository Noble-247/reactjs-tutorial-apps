import React from "react";
import logo from "../airbnb_img/Airbnb-logo.png";

function AirbnbNavigation() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();

  if (hours < 12) {
    timeOfDay = "Morning";
  } else if (hours >= 12 && hours <= 15) {
    timeOfDay = "Afternoon";
  } else if (hours >= 16 && hours <= 18) {
    timeOfDay = "Evening";
  } else {
    timeOfDay = "Night";
  }

  return (
    <React.Fragment>
      <nav className='navigation container'>
        <img className='app-logo' src={logo} alt='logo' />
        <div className='time-stamp'>
          <p>
            Hi There!! Good {timeOfDay}, Todays date is: {day}/{month}/{year},
            Time: {hour}:{minute}:{seconds}
          </p>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default AirbnbNavigation;

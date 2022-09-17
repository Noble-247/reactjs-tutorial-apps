import React from "react";
import "./AirbnbApp.css";
import AirbnbCard from "./airbnb_components/AirbnbCard";
import AirbnbNavigation from "./airbnb_components/AirbnbNavigation";
import AirbnbShowcase from "./airbnb_components/AirbnbShowcase";
import dataItems from "./Airbnb_Database/dataItems";

function App() {
  const dataElements = dataItems.map((item) => {
    return <AirbnbCard key={item.id} item={item} />;
  });
  return (
    <div>
      <AirbnbNavigation />
      <AirbnbShowcase />
      {/* <Contact /> */}
      <div
        className='container'
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {dataElements}
      </div>
    </div>
  );
}

export default App;

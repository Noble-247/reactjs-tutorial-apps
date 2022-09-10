import React from "react";
import Card from "./components/Card";
import Navigation from "./components/Navigation";
import Showcase from "./components/Showcase";
import dataItems from "./Database/dataItems";

function App() {
  const dataElements = dataItems.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div>
      <Navigation />
      <Showcase />
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

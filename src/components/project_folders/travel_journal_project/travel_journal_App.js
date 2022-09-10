import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PlaceVisited from "./components/PlaceVisited";
import dataItems from "./Database/dataItems";

function App() {
  const dataElements = dataItems.map((item) => {
    return <PlaceVisited key={item.id} item={item} />;
  });

  return (
    <div className='container'>
      <Header />
      <div className='d-flex align-content-center justify-content-center flex-wrap'>
        {dataElements}
      </div>
      <Footer />
    </div>
  );
}

export default App;

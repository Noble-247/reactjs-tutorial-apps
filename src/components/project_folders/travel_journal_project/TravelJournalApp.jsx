import React from "react";
import "./TravelJournalApp.css";
import TravelJournalFooter from "./travel_journal_components/TravelJournalFooter";
import TravelJournalHeader from "./travel_journal_components/TravelJournalHeader";
import TravelJournalPlaceVisited from "./travel_journal_components/TravelJournalPlaceVisited";
import dataItems from "./travel_journal_Database/dataItems";

function TravelJournalApp() {
  const dataElements = dataItems.map((item) => {
    return <TravelJournalPlaceVisited key={item.id} item={item} />;
  });

  return (
    <div className='container'>
      <TravelJournalHeader />
      <div className='d-flex align-content-center justify-content-center flex-wrap'>
        {dataElements}
      </div>
      <TravelJournalFooter />
    </div>
  );
}

export default TravelJournalApp;

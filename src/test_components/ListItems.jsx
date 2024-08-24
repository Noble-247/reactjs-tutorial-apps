import React, { useState } from "react";

function ListItems() {
  const [animalKingdom, setAnimalKingdom] = useState([
    { id: 1, kingdom: "Mammalia" },
    { id: 2, kingdom: "Aves" },
    { id: 3, kingdom: "Insecta" },
    { id: 4, kingdom: "Fish" },
  ]);

  const animalKingdomDisplay = animalKingdom.map((kingdom, index) => {
    return (
      <p key={kingdom.id}>
        {" "}
        <input type='text' />
        {kingdom.kingdom}
      </p>
    );
  });

  return (
    <div>
      <h2>{animalKingdomDisplay}</h2>
      <h2>
        <button
          type='button'
          onClick={() => setAnimalKingdom([...animalKingdom].reverse())}
        >
          Sort Items
        </button>
      </h2>
    </div>
  );
}

export default ListItems;

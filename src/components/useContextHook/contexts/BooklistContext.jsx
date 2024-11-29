/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const BooklistContext = createContext();

function BooklistContextProvider(props) {
  const [booklist, setBooklist] = useState([
    { id: 1, title: "Name of the wind" },
    { id: 2, title: "The way of the kings" },
    { id: 3, title: "The final empire" },
    { id: 4, title: "The hero of ages" },
  ]);
  console.log(booklist);
  return (
    <BooklistContext.Provider value={{ booklist, setBooklist }}>
      {props.children}
    </BooklistContext.Provider>
  );
}

export default BooklistContextProvider;

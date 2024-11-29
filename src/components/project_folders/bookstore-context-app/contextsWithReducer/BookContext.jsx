/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import { bookReducer } from "./BookReducer";

export const BookContext = createContext();

function BookContextProvider(props) {
  const [books, dispatch] = useReducer(bookReducer, [], function () {
    const localData = localStorage.getItem("books-from-context-with-reducer");
    return localData ? JSON.parse(localData) : [];
  });

  // Set the items in the books array to localstorage on first load, and every re-render
  useEffect(() => {
    localStorage.setItem(
      "books-from-context-with-reducer",
      JSON.stringify(books)
    );
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;

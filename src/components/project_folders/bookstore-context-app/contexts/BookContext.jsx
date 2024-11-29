/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const BookContext = createContext();

function BookContextProvider(props) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("books-from-context");

    if (storedData) {
      setBooks(JSON.parse(storedData));
    }
  }, []);

  // Set the items in the books array to localstorage on first load, and every re-render
  /*   useEffect(() => {
    localStorage.setItem("books-from-context", JSON.stringify(books));
  }, [books]); */

  function addBook(title, author) {
    const newBook = [...books, { id: uuidv4(), title: title, author: author }];

    setBooks(newBook);
    localStorage.setItem("books-from-context", JSON.stringify(newBook));
  }

  function removeBook(id) {
    setBooks(books.filter((book) => book.id !== id));
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;

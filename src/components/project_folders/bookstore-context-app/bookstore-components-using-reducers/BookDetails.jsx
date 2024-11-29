import { useContext } from "react";
import { BookContext } from "../contextsWithReducer/BookContext";
import { REMOVE_BOOK } from "../contextsWithReducer/BookActions";

/* eslint-disable react/prop-types */
function BookDetails({ book }) {
  const { dispatch } = useContext(BookContext);
  return (
    <li onClick={() => dispatch({ type: REMOVE_BOOK, id: book.id })}>
      <div className='title'>{book.title}</div>
      <div className='author'>{book.author}</div>
    </li>
  );
}

export default BookDetails;

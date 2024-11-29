import { Fragment, useContext } from "react";
import { BookContext } from "../contextsWithReducer/BookContext";
import BookDetails from "./BookDetails";

function BookList() {
  const { books } = useContext(BookContext);
  return (
    <Fragment>
      {books.length > 0 && (
        <div className='book-list'>
          <ul>
            {books.map((book) => (
              <BookDetails book={book} key={book.id} />
            ))}
          </ul>
        </div>
      )}
      {books.length < 1 && <div className='empty'>Your bookstore is empty</div>}
    </Fragment>
  );
}

export default BookList;

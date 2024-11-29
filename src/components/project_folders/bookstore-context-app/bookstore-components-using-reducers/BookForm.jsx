import { useContext, useState } from "react";
import { BookContext } from "../contextsWithReducer/BookContext";
import { ADD_BOOK } from "../contextsWithReducer/BookActions";

function BookForm() {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(title, author);
    dispatch({ type: ADD_BOOK, book: { title, author } });
    setTimeout(() => {
      setTitle("");
      setAuthor("");
    }, 3000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='bookTitle'
        id='book-title'
        placeholder='Book Title'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />
      <input
        type='text'
        name='bookAuthor'
        id='book-author'
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
      />
      <input type='submit' value='Submit' />
    </form>
  );
}

export default BookForm;

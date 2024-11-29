import NavBar from "./bookstore-components-using-reducers/NavBar";
import BookContextProvider from "./contextsWithReducer/BookContext";
import "./Bookstore.css";
import BookList from "./bookstore-components-using-reducers/BookList";
import BookForm from "./bookstore-components-using-reducers/BookForm";

function BookstoreAppWithReducer() {
  return (
    <div className='App'>
      <BookContextProvider>
        <NavBar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default BookstoreAppWithReducer;

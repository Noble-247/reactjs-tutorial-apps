import NavBar from "./bookstore-components/NavBar";
import BookContextProvider from "./contexts/BookContext";
import "./Bookstore.css";
import BookList from "./bookstore-components/BookList";
import BookForm from "./bookstore-components/BookForm";
import BookstoreAppWithReducers from "./BookStoreAppWithReducer";
import { Fragment } from "react";

function BookstoreApp() {
  return (
    <Fragment>
      <div className='App'>
        <BookContextProvider>
          <NavBar />
          <BookList />
          <BookForm />
        </BookContextProvider>
      </div>
      <div className='App' style={{ paddingTop: "30px" }}>
        <h5 style={{ textAlign: "center" }}>INFO: SAME APP WITH REDUCERS</h5>
        <BookstoreAppWithReducers />
      </div>
    </Fragment>
  );
}

export default BookstoreApp;

import { useContext } from "react";
import { BookContext } from "../contextsWithReducer/BookContext";

function NavBar() {
  const { books } = useContext(BookContext);

  return (
    <div className='navigation-bar'>
      <h1>Cool Reading Lists</h1>
      <p>Currently, you have {books.length} books in your store</p>
    </div>
  );
}

export default NavBar;

import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BooklistContext } from "../contexts/BooklistContext";
function BookList() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { booklist } = useContext(BooklistContext);
  console.log(booklist);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className='book-list'
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {booklist.map((book) => (
          <li key={book.id} style={{ background: theme.ui }}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;

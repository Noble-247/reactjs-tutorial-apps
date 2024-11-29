import ThemeContextProvider from "./contexts/ThemeContext";
import Navbar from "./contextAppComponents/Navbar";
import Booklist from "./contextAppComponents/Booklist";
import ThemeToggle from "./contextAppComponents/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";
import BooklistContextProvider from "./contexts/BooklistContext";

function ContextApp() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BooklistContextProvider>
            <Booklist />
          </BooklistContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default ContextApp;

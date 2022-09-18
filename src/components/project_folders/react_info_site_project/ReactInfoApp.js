import React from "react";
import "./ReactInfoApp.css";
import ReactInfoFooter from "./react_info_component/ReactInfoFooter";
import ReactInfoMain from "./react_info_component/ReactInfoMain";
import ReactInfoNavigation from "./react_info_component/ReactInfoNavigation";

function ReactInfoApp() {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }
  return (
    <div className='container'>
      <ReactInfoNavigation
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <ReactInfoMain darkMode={darkMode} />
      <ReactInfoFooter darkMode={darkMode} />
    </div>
  );
}

export default ReactInfoApp;

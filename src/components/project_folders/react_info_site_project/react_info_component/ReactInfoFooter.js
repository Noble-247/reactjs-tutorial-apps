import React from "react";

function ReactInfoFooter(props) {
  return (
    <div>
      <footer className={props.darkMode ? "dark" : ""}>
        <p className='text-center py-3'>Made With Love by Emmanuel</p>
      </footer>
    </div>
  );
}

export default ReactInfoFooter;

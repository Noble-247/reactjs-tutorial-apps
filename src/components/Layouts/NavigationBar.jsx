import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="d-flex gap-2 justify-content-around bg-secondary px-2 py-3 flex-wrap">
      <button className="btn btn-dark d-block">
        <Link
          className="text-decoration-none text-white"
          to="airbnb-demo-app"
        >
          AirBnB App
        </Link>
      </button>
      <button className="btn btn-dark d-block">
        <Link
          className="text-decoration-none text-white"
          to="meme-generator-app"
        >
          Meme Generator App
        </Link>
      </button>
      <button className="btn btn-dark d-block">
        <Link
          className="text-decoration-none text-white"
          to="react-info-app"
        >
          React Info App
        </Link>
      </button>
      <button className="btn btn-dark d-block">
        <Link
          className="text-decoration-none text-white"
          to="travel-journal-app"
        >
          Travel Journal App
        </Link>
      </button>
      <button className="btn btn-dark d-block">
        <Link
          className="text-decoration-none text-white"
          to="notes-app"
        >
          Notes App
        </Link>
      </button>
      <button className="btn btn-dark d-block">
        <Link
          className="text-decoration-none text-white"
          to="tenzies-app"
        >
          Tenzies App
        </Link>
      </button>
      <button className="btn btn-dark d-block">
        <Link
          className="text-decoration-none text-white"
          to="todolist-app"
        >
          TODO List App
        </Link>
      </button>
      <button className="btn btn-dark d-block">
        <Link
          className="text-decoration-none text-white"
          to="calculator-app"
        >
          Calculator App
        </Link>
      </button>
      <button className="btn btn-dark d-block">
        <Link
          className="text-decoration-none text-white"
          to="reduxtoolkit-app"
        >
          Reduxtoolkit App
        </Link>
      </button>
      <button className="btn btn-dark d-block">
        <Link
          className="text-decoration-none text-white"
          to="react-video-player"
        >
          React Video Player
        </Link>
      </button>
      <button className="btn btn-dark d-block">
        <Link
          className="text-decoration-none text-white"
          to="conditional-rendering"
        >
          Conditional Rendering
        </Link>
      </button>
      <button className="btn btn-dark d-block">
        <Link
          className="text-decoration-none text-white"
          to="list-items"
        >
          List Items
        </Link>
      </button>
      <button className="btn btn-dark d-block">
        <Link
          className="text-decoration-none text-white"
          to="signup-form"
        >
          Signup Form
        </Link>
      </button>
      <button className="btn btn-dark d-block">
        <Link
          className="text-decoration-none text-white"
          to="use-reducer"
        >
          Use Reducer Demo
        </Link>
      </button>
      <button className="btn btn-dark d-block">
        <Link
          className="text-decoration-none text-white"
          to="react-children"
        >
          React Children Demo
        </Link>
      </button>
      <button className="btn btn-dark d-block">
        <Link
          className="text-decoration-none text-white"
          to="target-test"
        >
          React Testing Demo
        </Link>
      </button>
      <button className="btn btn-dark d-block">
        <Link
          className="text-decoration-none text-white"
          to="add-to-list"
        >
          Add To List
        </Link>
      </button>
      <button className="btn btn-dark d-block">
        <Link
          className="text-decoration-none text-white"
          to="use-reducer-2"
        >
          UseReducer-2 Deno
        </Link>
      </button>
      <button className="btn btn-dark d-block">
        <Link
          className="text-decoration-none text-white"
          to="filter"
        >
          Filter Items
        </Link>
      </button>
      <button className="btn btn-dark d-block">
        <Link
          className="text-decoration-none text-white"
          to="use-memo"
        >
          UseMemo Demo
        </Link>
      </button>
    </div>
  );
}

export default NavigationBar;

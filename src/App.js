import React from "react";
import AirbnbApp from "./components/project_folders/airbnb_project/AirbnbApp";
import MemeGeneratorApp from "./components/project_folders/memes_generator_project/MemeGeneratorApp";
import NotesApp from "./components/project_folders/notes_app/NotesApp";
import ReactInfoApp from "./components/project_folders/react_info_site_project/ReactInfoApp";
import TravelJournalApp from "./components/project_folders/travel_journal_project/TravelJournalApp";
import TenziesApp from "./components/tenzies_game_project/TenziesApp";
import ReactBasics from "./test_components/ReactBasics";
import TodoList from "./components/project_folders/todo_app/TodoList";
import ConditionalRendering from "./test_components/ConditionalRendering";
import ReactVideoPlayer from "./test_components/ReactVideoPlayer";
import ListItems from "./test_components/ListItems";
import SignupForm from "./test_components/SignupForm";
import UseReducer from "./test_components/UseReducer";
import UseRef from "./test_components/UseRef";
import ReactChildren from "./test_components/ReactChildren";
import TargetTest from "./testing/TargetTest";
import AddToList from "./test_components/AddToList";
import UseReducer2 from "./test_components/UseReducer2";
import Filter from "./test_components/Filter";
import UseMemo from "./test_components/UseMemo";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/Layouts/RootLayout";
import Calculator from "./components/project_folders/calculator_app/Calculator";

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<ReactBasics />} />
        {/* MAIN PROJECTS ROUTES */}
        <Route path='airbnb-demo-app' element={<AirbnbApp />} />
        <Route path='meme-generator-app' element={<MemeGeneratorApp />} />
        <Route path='react-info-app' element={<ReactInfoApp />} />
        <Route path='travel-journal-app' element={<TravelJournalApp />} />
        <Route path='notes-app' element={<NotesApp />} />
        <Route path='tenzies-app' element={<TenziesApp />} />
        <Route path='todolist-app' element={<TodoList />} />
        <Route path='calculator-app' element={<Calculator />} />

        {/* TEST PROJECTS ROUTES */}
        <Route
          path='conditional-rendering'
          element={<ConditionalRendering />}
        />
        <Route path='react-video-player' element={<ReactVideoPlayer />} />
        <Route path='list-items' element={<ListItems />} />
        <Route path='signup-form' element={<SignupForm />} />
        <Route path='use-reducer' element={<UseReducer />} />
        <Route path='use-ref' element={<UseRef />} />
        <Route path='react-children' element={<ReactChildren />} />
        <Route path='target-test' element={<TargetTest />} />
        <Route path='add-to-list' element={<AddToList />} />
        <Route path='use-reducer-2' element={<UseReducer2 />} />
        <Route path='filter' element={<Filter />} />
        <Route path='use-memo' element={<UseMemo />} />
      </Route>
    )
  );
  return (
    <div>
      <section>
        <RouterProvider router={Router} />
      </section>
    </div>
  );
}

export default App;

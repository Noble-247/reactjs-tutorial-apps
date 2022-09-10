import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Meme from "./components/Meme";
import AppTest from "./test_components/AppTest";
import Form from "./test_components/Form";
import Paragraphs from "./test_components/Paragraphs";
import SignupForm from "./test_components/SignupForm";

function App() {
  return (
    <div>
      <Header />
      <Meme />
      <Footer />
      {/* <AppTest /> */}
      {/* <Paragraphs /> */}
      {/* <Form /> */}
      <SignupForm />
    </div>
  );
}

export default App;

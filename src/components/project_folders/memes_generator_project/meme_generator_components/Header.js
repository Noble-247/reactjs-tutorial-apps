import React from "react";
import TrollFaceMeme from "../img/troll_face.png";

function Header() {
  return (
    <div className='container-fluid meme-bg-purple'>
      <header className='container text-white d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center'>
          <img
            style={{ height: " 70px" }}
            src={TrollFaceMeme}
            alt='Meme face'
            className='d-block'
          />
          <h2 className='fw-bold m-0'>Meme Generator</h2>
        </div>
        <p className='m-0'>React Course - Project 3</p>
      </header>
    </div>
  );
}

export default Header;

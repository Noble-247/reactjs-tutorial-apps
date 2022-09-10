import React from "react";
import dataItems from "../Database/dataItems";
import TrollFace from "../img/troll_face.png";

function Meme() {
  // const [memesImageURL, setMemesImageUrl] = React.useState("");

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImageURL: TrollFace,
  });

  const [allMemesImages, setAllMemesImages] = React.useState(dataItems);

  function getMemeImage(event) {
    const memesArray = allMemesImages;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].imageURL;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImageURL: url,
    }));
  }

  return (
    <div className='container'>
      <div id='form'>
        <div className='mt-5 mb-3'>
          <input type='text' className='form-control' />
        </div>
        <div className='mb-3'>
          <input type='text' className='form-control' />
        </div>
        <div className='d-grid gap-2'>
          <button
            onClick={getMemeImage}
            className='btn bg-purple text-white'
            type='button'
          >
            Get a new image
          </button>
        </div>
      </div>
      <div className='w-50 mx-auto'>
        <img className='img-fluid my-3' src={meme.randomImageURL} alt='' />
      </div>
    </div>
  );
}

export default Meme;

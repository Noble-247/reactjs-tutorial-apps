import React, { useEffect, useState } from "react";
import TrollFace from "../img/troll_face.png";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImageURL: TrollFace,
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes))
      .catch((error) => console.log(error));
  }, []);

  function getMemeImage(event) {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImageURL: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((previousMeme) => ({
      ...previousMeme,
      [name]: value,
    }));
  }

  return (
    <div className='container'>
      <div id='form'>
        <div className='mt-5 mb-3'>
          <input
            placeholder='First Text'
            type='text'
            className='form-control'
            name='topText'
            value={meme.topText}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <input
            placeholder='Bottom Text'
            type='text'
            className='form-control'
            name='bottomText'
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <div className='d-grid gap-2'>
          <button
            onClick={getMemeImage}
            className='meme-btn meme-bg-purple text-white'
            type='button'
          >
            Get a new image
          </button>
        </div>
      </div>
      <div className='w-50 mx-auto meme-container'>
        <img className='img-fluid my-3' src={meme.randomImageURL} alt='' />
        <p className='h4 top-text'>{meme.topText}</p>
        <p className='h4 bottom-text'>{meme.bottomText}</p>
      </div>
    </div>
  );
}

export default Meme;

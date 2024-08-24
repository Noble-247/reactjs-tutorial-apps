import React from "react";
import ShowcaseImage from "../airbnb_img/showcase.jpg";

function AirbnbShowcase() {
  return (
    <React.Fragment>
      <section className='container showcase'>
        <img src={ShowcaseImage} className='showcase-image' alt='' />
      </section>
      <section className='container'>
        <h1 className='showcase-title'>Online Experience</h1>
        <p className='showcase-text'>
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home
        </p>
      </section>
    </React.Fragment>
  );
}

export default AirbnbShowcase;

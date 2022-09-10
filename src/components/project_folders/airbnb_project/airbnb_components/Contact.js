import React from "react";
import Card1 from "../img/card-1.jpg";

function Contact(props) {
  /*  const star = "⭐";
  const itemRating = `5.0(6) . USA`;
  const itemName = "French Design Bedrooms Available";
  const itemPrice = `From $136 / Unit`; */
  return (
    <React.Fragment>
      <div>
        <div className='card-container'>
          <div className='card'>
            <img src={Card1} className='card-image' alt='bedroom' />
            <p className='card-text'>
              <span className='star'>{props.star}</span>
              {props.itemRating}
            </p>
            <p className='card-text'>{props.itemName}</p>
            <p className='card-text'> {props.itemPrice} </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;

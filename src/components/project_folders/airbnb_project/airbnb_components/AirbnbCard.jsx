import React from "react";

function AirbnbCard(props) {
  console.log(props);
  let badgeText;
  if (props.item.openSpot === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "online") {
    badgeText = "ONLINE";
  }

  return (
    <React.Fragment>
      <div>
        <div className='card-container'>
          <div className='card'>
            {badgeText && (
              <div className='card-open-spot'>
                <small>{badgeText}</small>
              </div>
            )}
            <img src={props.item.image} className='card-image' alt='bedroom' />
            <p className='card-text'>
              <span className='star'>{props.item.star}</span>
              {props.itemRating}
            </p>
            <p className='card-text'>{props.item.itemName}</p>
            <p className='card-text'> {props.item.itemPrice} </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AirbnbCard;

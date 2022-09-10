import React from "react";

function PlaceVisited(props) {
  console.log(props.item);

  return (
    <div className='d-flex justify-content-center pt-3'>
      <div className='card mb-3' style={{ maxWidth: "700px" }}>
        <div className='row g-0'>
          <div className='col-md-4'>
            <img
              src={props.item.imageURL}
              className='img-fluid rounded-start'
              alt='...'
            />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <div className='fw-light fw-bold'>
                <small className='d-inline-block me-3'>
                  {props.item.location}
                </small>
                <small className='d-inline-block'>
                  <a
                    href={props.item.bingMapLink}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Wiew on Nicrosoft Bing Map
                  </a>
                </small>
              </div>
              <h5 className='card-title display-6 my-1'>{props.item.title}</h5>
              <div className='fw-bold'>
                <small className='d-inline-block me-3'>
                  {props.item.startDate}
                </small>
                <small className='d-inline-block'>{props.item.endDate}</small>
              </div>
              <p className='card-text'>{props.item.description}</p>
              <p className='card-text'>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceVisited;

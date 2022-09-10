import React from "react";

function BoxTest(props) {
  // console.log(props.boxID);
  /*  const [boxState, setObjectState] = React.useState(props.on); 

  function changeObjectState() {
    setObjectState((prevState) => !prevState);
  }
*/
  const styles = {
    backgroundColor: props.on ? "#222222" : "#cccccc",
    border: "1px solid black",
    width: "100%",
    height: "100%",
    margin: "5px",
    color: props.on ? "#cccccc" : "#222222",
  };

  function runToggle() {
    props.toggle(props.boxID);
  }

  return (
    <div>
      <p
        onClick={runToggle}
        className='d-flex align-items-center justify-content-center'
        style={styles}
      >
        {" "}
        {props.boxID}{" "}
      </p>
    </div>
  );
}

export default BoxTest;

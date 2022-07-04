// import React from "react";

const MyFirstComponent = ({ name, timeOfDay }) => {
  // console.log("props from component", props);
  return (
    <div>
      <p>
        Good {timeOfDay} {name}
      </p>
      {/* <p>Good morning {props.period}</p>
      <p>Good morning {props.age}</p> */}
    </div>
  );
};

export default MyFirstComponent;

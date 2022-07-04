import React from "react";

const Home = () => {
  const myStyles = {
    fontWeight: "700",
    color: "yellow",
  };

  return (
    <div>
      <p
        style={{
          color: "red",
          fontSize: "40px",
        }}
      >
        Home
      </p>
      <p style={myStyles}>This is another paragraph</p>
    </div>
  );
};

export default Home;

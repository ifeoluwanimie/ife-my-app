import React, { useState } from "react";

// react hooks

const MyForm = () => {
  // const [name, setName] = useState("");
  const [name, setName] = useState("");

  return (
    <div>
      {/* <p>My Login Form</p> */}
      <form action="">
        <label htmlFor="email">
          <input type="email" />
        </label>
      </form>
    </div>
  );
};

export default MyForm;

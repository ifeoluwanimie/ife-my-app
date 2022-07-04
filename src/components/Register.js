import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const baseURL = "https://jsonplaceholder.typicode.com/posts";

  const getUserDetails = (event) => {
    event.preventDefault();
    // console.log(email, password, name, phoneNumber);

    // const variables = {
    //   email,
    //   password,
    //   name,
    //   phoneNumber,
    // };

    const variables = {
      title: "Our second post with JSON placeholder",
      body: "This is our second article",
    };

    axios.post(baseURL, variables).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <p>Registration page</p>
      <form action="" onSubmit={getUserDetails}>
        <label htmlFor="name">
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="email">
          Email:{" "}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>{" "}
        <br />
        <label htmlFor="Phone Number">
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>{" "}
        <br />
        <input type="submit" />
        Register
      </form>
      <p>
        Existing user? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;

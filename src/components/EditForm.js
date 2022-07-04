import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditForm = () => {
  const { id } = useParams();

  const [email, setEmail] = useState("testtwo@gmail.com");
  const [password, setPassword] = useState("");

  const baseURL = "https://jsonplaceholder.typicode.com/todos";

  const getAllContacts = () => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
    });
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <div>
      <p>Edit Page for {id}</p>
      <form action="">
        <label htmlFor="email">
          Email:{" "}
          <input
            readOnly
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" />
        Login
        {/* <p>
          New user? <Link to="/register">Register</Link>
        </p> */}
      </form>
    </div>
  );
};

export default EditForm;

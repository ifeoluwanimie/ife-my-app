import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditForm = () => {
  const { id } = useParams();

  const [title, setTitle] = useState();

  const baseURL = `https://jsonplaceholder.typicode.com/posts/${id}`;

  const getSingleContact = () => {
    axios.get(baseURL).then((response) => {
      setTitle(response.data.title);
    });
  };

  const editTitle = (event) => {
    event.preventDefault();
    const variables = {
      id,
      title,
    };

    console.log("the most recent title", variables);
    axios.put(baseURL, title).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    getSingleContact();
  }, []);

  return (
    <div>
      <p>Edit Page for {id}</p>
      <form action="" onSubmit={editTitle}>
        <label htmlFor="title">
          Title:{" "}
          <input
            type="text"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <input type="submit" />
        Edit
      </form>
    </div>
  );
};

export default EditForm;

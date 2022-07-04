import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleContact = () => {
  const { id } = useParams();
  // console.log("id", id);

  const [singleContactData, setSingleContactData] = useState({});

  const baseURL = `https://jsonplaceholder.typicode.com/posts/${id}`;

  const getSingleContact = () => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setSingleContactData(response.data);
      // setAllContacts(response.data);
    });
  };

  useEffect(() => {
    getSingleContact();
  }, []);

  return (
    <div className="single-post">
      <p>Contact id: {singleContactData.id} </p>
      <p>Contact title: {singleContactData.title} </p>
      <p>Contact body:{singleContactData.body} </p>
    </div>
  );
};

export default SingleContact;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import edit from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";

const AllContactsPage = () => {
  const navigate = useNavigate();

  const [allContacts, setAllContacts] = useState([]);
  const baseURL = "https://jsonplaceholder.typicode.com/posts";

  const getAllContacts = () => {
    axios.get(baseURL).then((response) => {
      setAllContacts(response.data);
    });
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  const goToEditPage = () => {
    navigate("/edit");
  };

  return (
    <div className="contact-layout">
      {allContacts.map((contact) => {
        return (
          <div className="contact-card" key={contact.id}>
            <div className="contact-details">
              <Link to={`${contact.id}`}>
                <p className="contact-name">John Smith</p>
                <p className="contact-title">Business Consultant</p>
              </Link>

              <div className="">
                <Link to={`${contact.id}`} className="">
                  <img src={edit} alt="edit" />
                </Link>
                <div className="">
                  <img src={deleteIcon} alt="deleteIcon" />
                </div>
              </div>
            </div>
            <p>{contact.id}</p>
            <p>{contact.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllContactsPage;

// title of number 1: sunt aut facere repellat provident occaecati excepturi optio reprehenderit

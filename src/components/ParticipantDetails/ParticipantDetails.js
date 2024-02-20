import React from "react";
import { useHistory, useParams } from "react-router-dom";

import useFetch from "../Hooks/useFetch";
import Navbar from "../navbar/Navbar";

const ParticipantDetails = () => {
  const url = "http://localhost:8000/data/";
  const { id } = useParams();
  const { data: books, error, isPending } = useFetch(url + id);
  const history = useHistory();
  //console.log(books);
  const handleDelete = () => {
    fetch("http://localhost:8000/data/" + books.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  const handleEdit = () => {
    fetch("http://localhost:8000/data/" + books.id, {
      //method: "EDIT",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <>
      <Navbar />
      <div
        className="books-details"
        style={{
          padding: 10,
          margin: 20,
          borderBlockEnd: 1,
          color: "orange",
          backgroundColor: "cornsilk",
        }}
      >
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {books && (
          <article>
            <h2>{books.Name}</h2>
            <p>Writen by: {books.Authors}</p>
            <p>Published by: {books.Publisher}</p>
            <div>Description: {books.Description}</div>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
          </article>
        )}
      </div>
    </>
  );
};

export default ParticipantDetails;

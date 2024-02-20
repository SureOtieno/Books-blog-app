import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../navbar/Navbar";

const Create = () => {
  const [title, setTitle] = useState("Start here..");
  const [description, setDescription] = useState("Start here..");
  const [author, setAuthor] = useState("Bazu");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, description, author };
    setIsPending(true);

    fetch("http://localhost:8000/data", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      description: JSON.stringify(book),
    }).then(() => {
      console.log("Hello");
      setIsPending(false);
    });
    //history.go(-1);
    history.push("/");
  };

  return (
    <div className="create-new">
      <div>
        <Navbar />
      </div>
      <div>
        <h2>Add a new book</h2>
        <form
          action=""
          style={{
            width: 100,
            padding: (6, 10),
            margin: (10, 1),
            border: (1, "solid", "lightyellow"),
            boxSizing: "border-box",
            display: "block",
            borderRadius: 8,
            textAlign: "left",
          }}
          onSubmit={handleSubmit}
        >
          <label>Book title</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Book description:</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label>Authors</label>
          <select
            style={{
              width: 100,
              padding: (6, 10),
              margin: (10, 1),
              border: (1, "solid", "lightyellow"),
              boxSizing: "border-box",
              display: "block",
              borderRadius: 8,
              textAlign: "left",
            }}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="bazinga"></option>
            <option value="bazu"></option>
          </select>
          {!isPending && (
            <button
              style={{
                background: "DarkKhaki",
                color: "Indigo",
                border: 0,
                padding: 8,
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Add book
            </button>
          )}
          {isPending && (
            <button
              style={{
                background: "DarkKhaki",
                color: "Indigo",
                border: 0,
                padding: 8,
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Adding book..
            </button>
          )}
        </form>
        <p>{title}</p>
        <p>{description}</p>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default Create;

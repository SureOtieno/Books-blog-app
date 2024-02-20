import React from "react";
import map from "lodash/map";
import { Link } from "react-router-dom";

const AuthorsList = ({ books, title }) => {
  // destructuring renders the below variable definitions useless

  return (
    <div className="student-list">
      <div className="home">
        <h1>{title}</h1>
        <h2>Total Books: {books.length}</h2>
        {map(books, (book) => (
          <div
            key={book.id}
            className="blog-preview"
            style={{
              padding: 10,
              margin: 20,
              borderBlockEnd: 1,
              color: "orange",
              backgroundColor: "cornsilk",
            }}
          >
            <div>
              <Link to={`/books/${book.id}`}>
                <h4 className="input-label">Title: {book.Name} </h4>
                <p>Author: {book.Authors}</p>

                <p> Book Id: {book.id}</p>
              </Link>
              <p>
                Published: {book.PublishYear} - {book.PublishMonth} -
                {book.PublishDay}
              </p>
              <p>Book Description: {book.Description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorsList;

import React from "react";

import AuthorsList from "../authorsList/AuthorsList";
import Navbar from "../navbar/Navbar";
import useFetch from "../Hooks/useFetch";
import Layout from "../Layout/Layout";

const Home = () => {
  const url = "http://localhost:8000/data";
  const { data: books, isPending, error } = useFetch(url);
  //console.log(books.id);

  return (
    <>
      <Layout>
        <Navbar />
      </Layout>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {books && (
        <AuthorsList
          books={books}
          title="Books List"
          books-counts={books.length}
        />
      )}
    </>
  );
};

export default Home;

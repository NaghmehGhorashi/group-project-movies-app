import React, { Suspense, useContext } from "react";
import Navbar from "../../components/navbar/navbar";
import Wrapper from "../../components/container/container";
import { Link } from "react-router-dom";
// be consistent with the import naming convention
import styled from "./movies.module.css";
const Singlemovie = React.lazy(() =>
  import("../../components/movie/singlemovie")
);

import { MoviesContext } from "../../context/MoviesContext";

// The filename should be Movies.jsx
// The folder should not have a space in the name
// Redundant divs can be removed

function Movies() {
  const { movies, loading, handleDelete } = useContext(MoviesContext);

  // Break this out for better readability
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Navbar />
      <div className={styled.container}>
        <div className={styled.wrapper}>
          <div className={styled.articles}>
            {movies.map((movie) => (
              <Suspense fallback={<div>Is Loading...</div>} key={movie.id}>
                <div className={styled.articleItem}>
                  <Link to={`/movie/${movie.id}`}>
                    <Singlemovie article={movie} />
                  </Link>
                  <button
                    onClick={() => handleDelete(movie.id)}
                    className={styled.deleteButton}
                  >
                    Delete
                  </button>
                </div>
              </Suspense>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Movies;

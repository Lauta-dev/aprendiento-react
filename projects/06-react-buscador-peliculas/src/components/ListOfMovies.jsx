import React from "react";

const estilosGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '10px',
  listStyle: 'none',
}

export function GetMovies({ movies }) {
  return (
    <ul style={estilosGrid}>{
      movies.map(movies => (
        <li key={movies.id}>
          <h3>{movies.title}</h3>
          <p>{movies.year}</p>
          <img
            height='auto'
            width='150px'
            src={movies.poster}
            alt={movies.title}
          />
        </li>
      ))
    }</ul>
  )
}

function NoMoviesResult() {
  return <p>No se encontraron peliculas</p>
}

export function Movies({ movies }) {
  const hasMovie = movies?.length > 0;
  return hasMovie ? <GetMovies movies={movies} /> : <NoMoviesResult />
}

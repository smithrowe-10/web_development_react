function Movie(props) {

  return (
    <div key={props.movie.id}>
      <img src={props.movie.medium_cover_image} alt={props.movie.title} />
      <h2>{props.movie.title}</h2>
      <p>{props.movie.summary}</p>
      <ul>
        {props.movie.genres.map((genre) => (<li key={genre}>{genre}</li>))}
      </ul>
    </div>
  );
}

export default Movie;

import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";
import { useMovieGenreQuery } from "../../hook/useMovieGenre";

const MovieCard = ({ movie }) => {
    const { data: genreData } = useMovieGenreQuery();
    console.log("genreData : ", genreData);
    return (
        <div
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.poster_path})`,
            }}
            className="movie-card"
        >
            <div className="overlay">
                <h1>{movie.title}</h1>
                <p>
                    {movie.genre_ids.map((id, index) => (
                        <Badge bg="danger" key={index}>
                            {id}
                        </Badge>
                    ))}
                </p>
                <ul>
                    <li>✨ {movie.vote_average.toFixed(2)}</li>
                    <li>🎉 {movie.popularity.toFixed(2)}</li>
                    <li>🕶 {movie.adult ? "+18" : "ALL"}</li>
                </ul>
            </div>
        </div>
    );
};

export default MovieCard;

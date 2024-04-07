import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";

const MovieCard = ({ movie }) => {
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
                    <li>{movie.vote_average}</li>
                    <li>{movie.popularity}</li>
                    <li>{movie.adult ? "over18" : "under18"}</li>
                </ul>
            </div>
        </div>
    );
};

export default MovieCard;

import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";
import { useMovieGenreQuery } from "../../hook/useMovieGenre";

const MovieCard = ({ movie }) => {
    const { data: genreData } = useMovieGenreQuery(); // 이름 재정의
    // console.log("genreData : ", genreData);
    //장르 데이터와 영화 별 장르 id를 매칭시켜준다.
    const showGenre = (genreIdList) => {
        if (!genreData) return [];
        const genreNameList = genreIdList.map((id) => {
            const genreObj = genreData.find((genre) => genre.id === id);
            // console.log('genreObj', genreObj);
            return genreObj.name;
        });
        // console.log(genreNameList);
        return genreNameList;
    };
    return (
        <div
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.poster_path})`,
            }}
            className="movie-card"
        >
            <div className="overlay">
                <h3>{movie.title}</h3>
                <p>
                    {showGenre(movie.genre_ids).map((genre, index) => (
                        <Badge bg="danger" key={index}>
                            {genre}
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

import "./MovieDetailSummary.style.css";

const MovieDetailSummary = ({ movie }) => {
    return (
        <div>
            <span className="tag">{movie?.tagline}</span>
            <h3>
                <b>{movie.title}</b> ({movie.release_date.slice(0, 4)})
                <span className="time">
                    {Math.floor(movie.runtime / 60)}시간
                    {movie.runtime % 60}분
                </span>
            </h3>
            <ul className="movie-info">
                <li>{movie.release_date} 개봉</li>
                <li>✨{movie.vote_average}</li>
            </ul>
            <ul className="tag-wrap">
                {movie.genres.map((genre) => (
                    <li className="tag" key={genre.id}>
                        {genre.name}
                    </li>
                ))}
            </ul>

            <p>
                {movie.budget > 0 &&
                    `💰 제작비 ${movie.budget.toLocaleString(3)}`}
                {movie.revenue > 0 &&
                    `💰 수익 ${movie.revenue.toLocaleString(3)}`}
            </p>
            {movie.overview && <div className="overview">{movie.overview}</div>}
        </div>
    );
};
export default MovieDetailSummary;

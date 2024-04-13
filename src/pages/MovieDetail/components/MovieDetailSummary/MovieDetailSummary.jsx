import './MovieDetailSummary.style.css';

const MovieDetailSummary = ({movie}) => {
    return (
        <div>
            <span className='tag'>{movie.tagline}</span>
            <h3>
                <b>{movie.title}</b> ({movie.release_date.slice(0, 4)}) {(movie.runtime / 60).toFixed(0)}시간
                {movie.runtime % 60}
            </h3>
            <ul className='movie-info'>
                <li>{movie.release_date} </li>
                <li>✨{movie.vote_average}</li>

                {movie.genres.map((genre) => (
                    <li className='tag' key={genre.id}>
                        {genre.name}
                    </li>
                ))}
            </ul>
            <p>
                💰 제작비 {movie.budget.toLocaleString(3)} | 수익 {movie.revenue.toLocaleString(3)}
            </p>
            {/* overview 3줄 보이고, 더보기 제공 */}
            <div className='overview'>{movie.overview}</div>
        </div>
    );
};
export default MovieDetailSummary;

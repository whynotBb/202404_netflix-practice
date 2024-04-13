import './MovieDetailCard.style.css';

const MovieDetailCard = ({movie}) => {
    return (
        <div
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.poster_path})`,
            }}
            className='movie-detail-card'
        ></div>
    );
};
export default MovieDetailCard;

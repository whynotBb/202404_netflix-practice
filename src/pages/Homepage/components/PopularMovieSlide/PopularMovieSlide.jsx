import React from "react";
import { usePopularMoviesQuery } from "../../../../hook/usePopularMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/reponsive";
import { Spinner, Alert } from "react-bootstrap";

const PopularMovieSlide = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();
    if (isLoading) {
        return (
            <div className="loading-box">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }
    if (isError) {
        return (
            <div className="loading-box">
                <Alert variant="dark" bg="dark" data-bs-theme="dark">
                    {error.message}
                </Alert>
            </div>
        );
    }
    return (
        <div>
            <MovieSlider
                title="Popular Movies"
                movies={data.results}
                responsive={responsive}
            />
        </div>
    );
};

export default PopularMovieSlide;

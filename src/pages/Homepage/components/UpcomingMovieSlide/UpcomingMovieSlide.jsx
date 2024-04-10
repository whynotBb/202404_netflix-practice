import React from "react";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/reponsive";
import { useUpcomingMovies } from "../../../../hook/useUpcomingMovies";
import { Spinner, Alert } from "react-bootstrap";

const UpcomingMovieSlide = () => {
    const { data, isLoading, isError, error } = useUpcomingMovies();
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
                title="Upcomng Movies"
                movies={data.results}
                responsive={responsive}
            />
        </div>
    );
};

export default UpcomingMovieSlide;

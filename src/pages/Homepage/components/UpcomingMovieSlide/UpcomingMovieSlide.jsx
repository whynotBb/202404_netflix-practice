import React from "react";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/reponsive";
import { useUpcomingMovies } from "../../../../hook/useUpcomingMovies";

const UpcomingMovieSlide = () => {
    const { data, isLoading, isError, error } = useUpcomingMovies();
    if (isLoading) {
        return <h1>Loading</h1>;
    }
    if (isError) {
        return <h1>{error.message}</h1>;
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

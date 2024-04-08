import React from "react";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/reponsive";
import { useTopRatedMovies } from "../../../../hook/useTopRatedMovies";

const TopRatedMovieSlide = () => {
    const { data, isLoading, isError, error } = useTopRatedMovies();
    if (isLoading) {
        return <h1>Loading</h1>;
    }
    if (isError) {
        return <h1>{error.message}</h1>;
    }
    return (
        <div>
            <MovieSlider
                title="Top Rated Movies"
                movies={data.results}
                responsive={responsive}
            />
        </div>
    );
};

export default TopRatedMovieSlide;

import React from "react";
import { usePopularMoviesQuery } from "../../../../hook/usePopularMovies";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";
import "./PopularMovieSlide.style.css";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};
const PopularMovieSlide = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();
    if (isLoading) {
        return <h1>Loading</h1>;
    }
    if (isError) {
        return <h1>{error.message}</h1>;
    }
    return (
        <div>
            <h3>Popular Movies</h3>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass="movie-slider p-1"
                responsive={responsive}
            >
                {data?.results.map((movie, index) => (
                    <MovieCard movie={movie} key={index} />
                ))}
            </Carousel>
            ;
        </div>
    );
};

export default PopularMovieSlide;

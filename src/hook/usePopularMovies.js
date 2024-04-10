import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPopularMovies = () => {
    return api.get(`/movie/popular`);
};

export const usePopularMoviesQuery = () => {
    console.log();
    return useQuery({
        queryKey: ["movie-popular"],
        queryFn: fetchPopularMovies,
        select: (result) => result.data, // result 의 data 만 반환
    });
};

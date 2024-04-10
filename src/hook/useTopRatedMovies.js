import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchTopRatedMovies = () => {
    return api.get(`/movie/top_rated?language=ko`);
};

export const useTopRatedMovies = () => {
    return useQuery({
        queryKey: ["movie-top-rated"],
        queryFn: fetchTopRatedMovies,
        select: (result) => result.data, // result 의 data 만 반환
    });
};

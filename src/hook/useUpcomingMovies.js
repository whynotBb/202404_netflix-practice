import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchUpcomingMovies = () => {
    return api.get(`/movie/upcoming?language=ko`);
};

export const useUpcomingMovies = () => {
    return useQuery({
        queryKey: ["movie-upcoming"],
        queryFn: fetchUpcomingMovies,
        select: (result) => result.data, // result 의 data 만 반환
    });
};

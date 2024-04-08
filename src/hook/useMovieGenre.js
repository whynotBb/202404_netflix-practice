import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieGener = () => {
    return api.get("/genre/movie/list?language=en");
};

export const useMovieGenreQuery = () => {
    return useQuery({
        queryKey: ["movie-genre"],
        queryFn: fetchMovieGener,
        select: (result) => result.data,
    });
};

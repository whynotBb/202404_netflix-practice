import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieCreditsDetail = (id) => {
    return api.get(`person/${id}/movie_credits`);
};

export const useMovieCreditsDetailQuery = (id) => {
    return useQuery({
        queryKey: ["movie-credits-detail", id],
        queryFn: () => fetchMovieCreditsDetail(id),
        select: (result) => result.data,
    });
};

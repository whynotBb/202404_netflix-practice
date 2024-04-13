import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchRecommendationsMovies = (id) => {
    return api.get(`movie/${id}/recommendations`);
};

export const useRecommendationsMoviesQuery = (id) => {
    return useQuery({
        queryKey: ["movie-recommendations", id],
        queryFn: () => fetchRecommendationsMovies(id),
        select: (result) => result.data,
    });
};

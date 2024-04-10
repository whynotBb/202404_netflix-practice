import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
const fetchSearchMovie = ({ keyword, page, genreId }) => {
    return keyword
        ? api.get(`/search/movie?query=${keyword}&page=${page}`)
        : genreId
        ? api.get(
              `/discover/movie?sort_by=popularity.desc&page=${page}&with_genres=${genreId}`
          )
        : api.get(`/discover/movie?sort_by=popularity.desc&page=${page}`);
};
export const useSearchMovieQuery = ({ keyword, page, genreId }) => {
    console.log("genreId", genreId);
    return useQuery({
        queryKey: ["movie-search", { keyword, page, genreId }],
        queryFn: () => fetchSearchMovie({ keyword, page, genreId }),
        select: (result) => result.data,
    });
};

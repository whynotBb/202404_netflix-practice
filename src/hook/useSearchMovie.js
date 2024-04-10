import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
const fetchSearchMovie = ({ keyword, page, genreId, sortType }) => {
    return keyword
        ? api.get(`/search/movie?query=${keyword}&page=${page}`)
        : api.get(
              `/discover/movie?language=ko&sort_by=${sortType}&page=${page}&with_genres=${genreId}`
          );
};
export const useSearchMovieQuery = ({ keyword, page, genreId, sortType }) => {
    console.log("genreId", genreId, sortType);
    return useQuery({
        queryKey: ["movie-search", { keyword, page, genreId, sortType }],
        queryFn: () => fetchSearchMovie({ keyword, page, genreId, sortType }),
        select: (result) => result.data,
    });
};

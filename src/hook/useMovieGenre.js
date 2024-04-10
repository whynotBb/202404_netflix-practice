import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieGenre = () => {
    return api.get("/genre/movie/list?language=ko");
};

export const useMovieGenreQuery = () => {
    return useQuery({
        queryKey: ["movie-genre"],
        queryFn: fetchMovieGenre,
        select: (result) => result.data.genres,
        staleTime: 300000, // 5분, 자주 호출할 필요가 없는 데이터는 타임 설정 해 줄 수 있음 ms 단위
    });
};

import {useQuery} from '@tanstack/react-query';
import api from '../utils/api';

const fetchMovieVideos = (id) => {
    return api.get(`movie/${id}?language=ko`);
};

export const useMovieVideosQuery = (id) => {
    return useQuery({
        queryKey: ['movie-videos', id],
        queryFn: () => fetchMovieVideos(id),
        select: (result) => result.data,
    });
};

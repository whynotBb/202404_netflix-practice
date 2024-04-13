import {useQuery} from '@tanstack/react-query';
import api from '../utils/api';

const fetchSimilarMovies = (id) => {
    return api.get(`movie/${id}/similar?language=ko`);
};

export const useSimilarMoviesQuery = (id) => {
    return useQuery({
        queryKey: ['movie-similar', id],
        queryFn: () => fetchSimilarMovies(id),
        select: (result) => result.data,
    });
};

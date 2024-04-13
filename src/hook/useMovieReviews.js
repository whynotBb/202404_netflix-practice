import {useQuery} from '@tanstack/react-query';
import api from '../utils/api';

// language=ko => data 없는 경우가 많다.
const fetchMovieReviews = (id) => {
    return api.get(`movie/${id}/reviews`);
};

export const useMovieReviewsQuery = (id) => {
    return useQuery({
        queryKey: ['movie-detail-reviews', id],
        queryFn: () => fetchMovieReviews(id),
        select: (result) => result.data,
    });
};

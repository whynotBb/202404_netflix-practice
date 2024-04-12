import React from 'react';
import {useParams} from 'react-router-dom';
import {useMovieDetailQuery} from '../../hook/useMovieDetail';
import {Spinner, Alert, Container, Row, Col} from 'react-bootstrap';
import {useMovieReviewsQuery} from '../../hook/useMovieReviews';
import {useSimilarMoviesQuery} from '../../hook/useSimilarMovies';
import {useMovieVideosQuery} from '../../hook/useMovieVideos';
import {useMovieCreditsQuery} from '../../hook/useMovieCredits';
import MovieDetailCard from './components/movieDetailCard/MovieDetailCard';
import MovieDetailSummary from './components/MovieDetailSummary/MovieDetailSummary';

const MovieDetailPage = () => {
    const {id} = useParams();
    console.log(id);
    const {data, isLoading, isError, error} = useMovieDetailQuery(id);
    const {
        data: reviewsData,
        // isLoading: reviewsLoading,
        // isError: reviewsError,
        // error: reviewsErrorM,
    } = useMovieReviewsQuery(id);
    const {
        data: similarData,
        // isLoading: similarLoading,
        // isError: similarError,
        // error: similarErrorM,
    } = useSimilarMoviesQuery(id);
    const {
        data: videosData,
        // isLoading: videosLoading,
        // isError: videosError,
        // error: videosErrorM,
    } = useMovieVideosQuery(id);
    const {
        data: creditsData,
        // isLoading: creditsLoading,
        // isError: creditsError,
        // error: creditsErrorM,
    } = useMovieCreditsQuery(id);

    console.log(
        'detail',
        data,
        'review',
        reviewsData,
        'similar',
        similarData,
        'videos',
        videosData,
        'credits',
        creditsData
    );

    if (isLoading) {
        return (
            <div className='loading-box'>
                <Spinner animation='border' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </Spinner>
            </div>
        );
    }
    if (isError) {
        return (
            <div className='loading-box'>
                <Alert variant='dark' bg='dark' data-bs-theme='dark'>
                    {error.message}
                </Alert>
            </div>
        );
    }
    return (
        <Container>
            <Row className='my-4'>
                <Col lg={4} sm={12}>
                    <MovieDetailCard movie={data} />
                </Col>
                <Col lg={8} sm={12}>
                    <MovieDetailSummary movie={data} />
                </Col>
            </Row>
        </Container>
    );
};

export default MovieDetailPage;

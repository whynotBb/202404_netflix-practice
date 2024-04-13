import React, { useState } from "react";
import "./MovieDetailPage.style.css";
import { useParams } from "react-router-dom";
import { useMovieDetailQuery } from "../../hook/useMovieDetail";
import { Spinner, Alert, Container, Row, Col, Button } from "react-bootstrap";
import { useMovieReviewsQuery } from "../../hook/useMovieReviews";
import { useRecommendationsMoviesQuery } from "../../hook/useSimilarMovies";
import { useMovieVideosQuery } from "../../hook/useMovieVideos";
import { useMovieCreditsQuery } from "../../hook/useMovieCredits";
import MovieDetailCard from "./components/movieDetailCard/MovieDetailCard";
import MovieDetailSummary from "./components/MovieDetailSummary/MovieDetailSummary";
import Carousel from "react-multi-carousel";
import PeopleCard from "./components/PeopleCard/PeopleCard";
import { responsive } from "../../constants/reponsive";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import MovieCard from "../../common/MovieCard/MovieCard";
import PreviewModal from "./components/PreviewModal/PreviewModal";

const MovieDetailPage = () => {
    const { id } = useParams();
    console.log(id);
    const { data, isLoading, isError, error } = useMovieDetailQuery(id);
    const {
        data: reviewsData,
        // isLoading: reviewsLoading,
        // isError: reviewsError,
        // error: reviewsErrorM,
    } = useMovieReviewsQuery(id);
    const {
        data: recommendData,
        // isLoading: similarLoading,
        // isError: similarError,
        // error: similarErrorM,
    } = useRecommendationsMoviesQuery(id);
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
        "detail",
        data,
        "review",
        reviewsData,
        "similar",
        recommendData,
        "videos",
        videosData,
        "credits",
        creditsData
    );
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    if (isLoading) {
        return (
            <div className="loading-box">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }
    if (isError) {
        return (
            <div className="loading-box">
                <Alert variant="dark" bg="dark" data-bs-theme="dark">
                    {error.message}
                </Alert>
            </div>
        );
    }

    return (
        <Container>
            <Row className="my-4">
                <Col lg={4} sm={12} className="mb-4">
                    <MovieDetailCard movie={data} />
                </Col>
                <Col lg={8} sm={12}>
                    <MovieDetailSummary movie={data} />
                    {videosData?.results.length > 0 && (
                        <Button
                            className="mt-4"
                            variant="outline-danger"
                            bg="dark"
                            data-bs-theme="dark"
                            onClick={handleShow}
                        >
                            예고편 보기 🎬
                        </Button>
                    )}

                    <PreviewModal
                        videos={videosData}
                        show={show}
                        handleClose={handleClose}
                    />
                </Col>
            </Row>
            <Row>
                <h2>REVIEWS</h2>
                {reviewsData?.results.length === 0 ? (
                    <p>리뷰가 없습니다.</p>
                ) : (
                    <MovieReviews reviewsData={reviewsData} />
                )}
                <MovieReviews reviewsData={reviewsData} />
            </Row>
            <Row className="my-4">
                <h2>CAST & CREW</h2>
                <Carousel
                    infinite={true}
                    centerMode={true}
                    autoPlay={true}
                    itemClass="movie-slider p-2"
                    responsive={responsive}
                >
                    {creditsData?.cast.slice(0, 10).map((cast) => (
                        <PeopleCard cast={cast} key={cast.id} />
                    ))}
                    {creditsData?.crew.slice(0, 5).map((crew) => (
                        <PeopleCard cast={crew} key={crew.id} />
                    ))}
                </Carousel>
            </Row>
            {recommendData && (
                <Row>
                    <h2>RECOMMEND</h2>
                    <Carousel
                        infinite={true}
                        centerMode={true}
                        autoPlay={true}
                        itemClass="movie-slider p-2"
                        responsive={responsive}
                    >
                        {recommendData?.results.map((movie, index) => (
                            <MovieCard key={index} movie={movie} type="sm" />
                        ))}
                    </Carousel>
                </Row>
            )}
        </Container>
    );
};

export default MovieDetailPage;

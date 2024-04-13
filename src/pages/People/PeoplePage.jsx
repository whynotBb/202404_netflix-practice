import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";

import MovieCard from "../../common/MovieCard/MovieCard";
import "./PeoplePage.style.css";
import { useMovieCreditsDetailQuery } from "../../hook/useMovieCreditsDetail";
import { usePersonDetailQuery } from "../../hook/usePersonDetail";
import { responsive } from "../../constants/reponsive";
import Carousel from "react-multi-carousel";

const PeoplePage = () => {
    const { id } = useParams();
    console.log(id);
    const { data, isLoading, isError, error } = useMovieCreditsDetailQuery(id);
    const { data: personDetailData } = usePersonDetailQuery(id);
    console.log("people data", data, personDetailData);

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
        <Container className="movie-container">
            <Row>
                <Row className="my-3">
                    <Col lg={4}>
                        <div
                            className="profileBox"
                            style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/original${personDetailData?.profile_path})`,
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div className="profileInfo my-3">
                            <h2>{personDetailData?.name}</h2>
                            <p>
                                {personDetailData?.known_for_department},{" "}
                                {personDetailData?.birthday}
                            </p>
                            <div>{personDetailData?.biography}</div>
                        </div>
                    </Col>
                </Row>
                <Col lg={12}>
                    <Row className="my-4">
                        <Carousel
                            infinite={true}
                            centerMode={true}
                            autoPlay={true}
                            responsive={responsive}
                            itemClass="movie-slider p-2"
                        >
                            {data?.cast.map((movie, index) => (
                                <MovieCard key={index} movie={movie} />
                            ))}
                        </Carousel>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default PeoplePage;

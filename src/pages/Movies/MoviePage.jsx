import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSearchMovieQuery } from "../../hook/useSearchMovie";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import { useMovieGenreQuery } from "../../hook/useMovieGenre";
// 진입 경로 2가지
// 1. nav bar 에서 movies 클릭 => popular movie 보여주기
// 2. keyword 를 입력해서 온 경우 => keyword와 관련된 영화를 보여줌

// pagination 설치
// page state 만들기
// page 클릭할때 마다 page 바꿔주기
// page 값이 바뀔때 마다 useSearchMovie 에 page 넣어서 fetch
const MoviePage = () => {
    const [query] = useSearchParams();
    const [page, setPage] = useState(1);

    const keyword = query.get("q");

    // 장르 불러와 리스트 만들기
    const { data: genreData } = useMovieGenreQuery(); // 이름 재정의
    // console.log("genreData : ", genreData);
    // console.log("genreList", genreList);
    const [genreId, setGenreId] = useState();
    const [genreDropdownTitle, setGenreDropdownTitle] =
        useState("장르를 선택하세요");
    const filterGenre = (id, name) => {
        console.log("filterGenre", id);
        setGenreId(id);
        setGenreDropdownTitle(name);
    };
    const resetFilterGenre = () => {
        setGenreId();
        setGenreDropdownTitle("장르를 선택하세요");
    };
    console.log(keyword);
    const { data, isLoading, isError, error } = useSearchMovieQuery({
        keyword,
        page,
        genreId,
    });
    console.log("data", data);

    const handlePageClick = ({ selected }) => {
        setPage(selected + 1);
    };

    //장르 데이터와 영화 별 장르 id를 매칭시켜준다.
    // const showGenre = (genreIdList) => {
    //     if (!genreData) return [];
    //     const genreNameList = genreIdList.map((id) => {
    //         const genreObj = genreData.find((genre) => genre.id === id);
    //         // console.log('genreObj', genreObj);
    //         return genreObj.name;
    //     });
    //     // console.log(genreNameList);
    //     return genreNameList;
    // };

    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }
    if (isError) {
        return <h1>{error.message}</h1>;
    }
    return (
        <Container>
            <Row>
                <Col lg={4} xs={12}>
                    <Dropdown data-bs-theme="dark">
                        <Dropdown.Toggle
                            variant="border-danger"
                            id="dropdown-basic"
                        >
                            {genreDropdownTitle}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={resetFilterGenre}>
                                선택해제
                            </Dropdown.Item>
                            {genreData?.map((genre, index) => (
                                <Dropdown.Item
                                    key={index}
                                    id={genre.id}
                                    onClick={() =>
                                        filterGenre(genre.id, genre.name)
                                    }
                                >
                                    {genre.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col lg={8} xs={12}>
                    <Row>
                        {data.results.map((movie, index) => (
                            <Col key={index} lg={4} xs={12}>
                                <MovieCard movie={movie} />
                            </Col>
                        ))}
                    </Row>
                    <ReactPaginate
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={data?.total_pages}
                        previousLabel="< previous"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                        forcePage={page - 1}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default MoviePage;

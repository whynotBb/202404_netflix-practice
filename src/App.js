import "./App.css";
import AppLayout from "./layout/AppLayout";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import MoviePage from "./pages/Movies/MoviePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";

// 홈페이지 '/'
// 영화 전체 보여주는 페이지(서치) '/movies?q=skdfj'
// 영화 디테일 페이지 '/movies/:id
// 추천영화 /movies/:id/recommandation
function App() {
    return (
        <div className="app">
            {/* Routes는 전체를 감싸 주어야 함 */}
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Homepage />} />
                    {/* movies 로 시작하는 페이지가 많을때 ROute 이용하여 그룹으로 구성할 수 있다. */}
                    <Route path="movies">
                        <Route index element={<MoviePage />} />
                        <Route path=":id" element={<MovieDetailPage />} />
                        {/* <Route path='/:id/recommandation' element={}/> */}
                    </Route>
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;

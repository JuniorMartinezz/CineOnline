import Home from "../../Public/Home/Home";
import Movies from "../../Public/Movies/Movies";
import Series from "../../Public/Series/Series";
import {Route, Routes } from "react-router-dom";
import MovieDetails from "../../Public/Details/MovieDetails/MovieDetails"
import SeriesDetails from "../../Public/Details/SeriesDetails/SeriesDetails"
import Search from "../../Public/Search/Search";

function Section() {
    return (
        <section id="section" className="container-p3">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Public/" element={<Home/>}/>
                <Route path="/Public/Movies/" element={<Movies/>}/>
                <Route path="/Public/series/" element={<Series/>}/>
                <Route path="/MovieDetails/:id" element={<MovieDetails/>}/>
                <Route path="/SeriesDetails/:id" element={<SeriesDetails/>}/>
                <Route path="/Search/" element={<Search/>}/>
            </Routes>
        </section>
    )
}

export default Section;
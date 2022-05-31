import Home from "../../Public/Home/Home";
import Series from "../../Public/Series/Series";
import Contact from "../../Public/Contact/Contact";
import {Route, Routes } from "react-router-dom";
import MovieDetails from "../../Public/Details/MovieDetails/MovieDetails"
import SeriesDetails from "../../Public/Details/SeriesDetails/SeriesDetails"
import Movies from "../../Public/Movies/Movies";

function Section() {
    return (
        <section id="section" className="container-p3">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Public/" element={<Home/>}/>
                <Route path="/Public/Movies/" element={<Movies/>}/>
                <Route path="/Public/series/" element={<Series/>}/>
                <Route path="/Public/Contact/" element={<Contact/>}/>
                <Route path="/MovieDetails/:id" element={<MovieDetails/>}/>
                <Route path="/SeriesDetails/:id" element={<SeriesDetails/>}/>
            </Routes>
        </section>
    )
}

export default Section;
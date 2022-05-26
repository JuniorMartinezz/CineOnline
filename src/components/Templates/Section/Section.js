import Home from "../../Public/Home/Home";
import Movies from "../../Public/Movies/Movies";
import Series from "../../Public/Series/Series";
import Contact from "../../Public/Contact/Contact";
import {Route, Routes } from "react-router-dom";
import  Details  from "../../Public/Details/Details";

function Section() {
    return (
        <section id="section" className="container-p3">
            <Routes>
                <Route path="/Public/" element={<Home/>}/>
                <Route path="/Public/Movies" element={<Movies/>}/>
                <Route path="/Public/Series" element={<Series/>}/>
                <Route path="/Public/Contact" element={<Contact/>}/>
                <Route path="/Details/:id" element={<Details/>}/>
            </Routes>
        </section>
    )
}

export default Section;
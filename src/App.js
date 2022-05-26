import Header from "./components/Templates/Header/Header";
import Nav from "./components/Templates/Nav/Nav";
import Section from "./components/Templates/Section/Section";
import Footer from "./components/Templates/Footer/Footer";
import './App.css'
import {
  BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
      <Router>
        <Header />
        <Nav />
        <Section />
        <Footer />
      </Router>
  );
}

export default App;

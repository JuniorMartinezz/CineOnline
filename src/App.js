import Header from "./components/Templates/Header/Header";
import Nav from "./components/Templates/Nav/Nav";
import Section from "./components/Templates/Section/Section";
import Footer from "./components/Templates/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Section />
      <Footer />
    </BrowserRouter> 
  );
}

export default App;

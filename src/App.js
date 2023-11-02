import "./styles/main.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";
import {  BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/project/:id" element={<Project/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;

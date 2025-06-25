import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import Home from "../src/pages/home/home.js";
import Navbar from "../src/navbar/navbar.js";
import Footer from "../src/footer/footer.js";
import Signup from "../src/signup/signup.js";
import Circles from "../src/pages/circles/circles.js";
import Invest from "../src/pages/invest/invest.js";
import Blog from "../src/pages/blog/blog.js";
import AboutUs from "../src/pages/aboutus/aboutus.js";
import FAQs from './pages/faqs/faqs.js';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/circles" element={<Circles />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

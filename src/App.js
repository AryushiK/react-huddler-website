import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import React from "react";
import Home from "../src/pages/home/home.js";
import Navbar from "../src/navbar/navbar.js";
import Footer from "../src/footer/footer.js";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

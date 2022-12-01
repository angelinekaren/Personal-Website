import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import React, { Fragment } from "react";

// COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

// PAGES
import Main from "./pages/Main/Main";
import Portfolio from "./pages/Portfolio/Porfolio";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

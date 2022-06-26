import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import UploadPage from "./components/UploadPage";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <React.Fragment>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" alt="" />
        </div>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/UploadPage" element={<UploadPage />}></Route>
          <Route path="/ProductPage/:id" element={<ProductPage />}></Route>
        </Routes>
      </Router>
      <div id="footer">
        <a href="#">회사소개</a>
        <a href="#">이용약관</a>
        <a href="#">통신판매업:123-1234</a>
        <a href="#">사업자등록번호:456-56-78951</a>
      </div> 
    </React.Fragment>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Master from "./website/layout/Master";
import Home from "./website/main component/Home";
import Login from "./website/components/Login";
import OurProductList from "./website/components/OurProductList";
import Grocerylist from "./website/components/Grocerylist";
import About from "./website/components/About";
import Blog from "./website/components/Blog";
import Brand from "./website/components/Brand"; // Import the Brand component
import Register from "./website/components/Register";

const Allroutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master Rcf={Home} />} />
        <Route path="/home" element={<Master Rcf={Home} />} />

        <Route path="/shopping" element={<Master Rcf={OurProductList} />} />

        <Route path="/category" element={<Master Rcf={Grocerylist} />} />
        <Route path="/brand" element={<Master Rcf={Brand} />} />

        <Route path="/about" element={<Master Rcf={About} />} />
        <Route path="/register"  element={<Register/> }/>

        <Route path="/blog" element={<Master Rcf={Blog} />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Allroutes;


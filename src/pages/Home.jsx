import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";

const Home = () => {
  return <div>{/* Code here */}
  <Routes>
    <Route path="/" element={<Login />}/>
  </Routes>
  
  </div>;
};

export default Home;

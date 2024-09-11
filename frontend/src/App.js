import React ,{useEffect}from "react";
import { Routes, Route,useLocation } from "react-router-dom";
import {Footer} from "./components";

import "./App.css";
import{
  Aboutus,
  Teacher
}from "./pages";
const App = () => {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
  return (
    <div>
      <Routes>

      {/* <Route path="/" element={<Teacher />} />  */}
      <Route path="/" element={<Aboutus />} /> 
      </Routes>
      <Footer />
    </div>
     
  );
};

export default App

import React ,{useEffect}from "react";
import { Routes, Route,useLocation } from "react-router-dom";


import "./App.css";
import{
  Curriculam
}from "./pages";
const App = () => {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
  return (
    <div>
      <Routes>

      <Route path="/" element={<Curriculam />} /> 
      </Routes>
      {/* <Footer /> */}
    </div>
     
  );
};

export default App
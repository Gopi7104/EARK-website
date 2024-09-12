import React,{useEffect} from "react";
import { Routes, Route,useLocation } from "react-router-dom";
import{Navigation} from "./components";
import {
  About,
  Home,
  Curriculam,
  Teacher
}from "./pages";
import {Footer} from './components'
import "./App.css";
import"./index.css";

const App = () => {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/curriculum" element={<Curriculam />} /> 
        <Route path="/teacher" element={<Teacher />} /> 

      </Routes>
      <Footer/>
    </div>
  );
};

export default App;

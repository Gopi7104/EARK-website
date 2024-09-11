import React, { useEffect } from 'react';
import { Routes, Route,useLocation } from "react-router-dom";

import { Footer } from './components';

const App = () => {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
  return (
    <div>
      <Footer/>
    </div>
  );
};

export default App;

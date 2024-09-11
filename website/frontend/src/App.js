import React, { useEffect } from 'react';
import { Routes, Route,useLocation } from "react-router-dom";
import { Footer,Navigation } from './components';
import { Home } from './pages';

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
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;

import React from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './pages/Home'
import Detail from './pages/Detail'
import NotFound from './pages/NotFound';

import 'bulma/css/bulma.css'

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import s from './App.module.css';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import DaysOfWeek from './components/DaysOfWeek/DaysOfWeek';
import Header from './components/Header/Header';


function App() {
  return (
    <BrowserRouter>
      <div className={s.wrapper}>
        <Header/>
        <Navbar/>
        <DaysOfWeek/>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { useState} from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import About from './Components/About';
import Card from './Components/Card';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import your route components too

function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setmodeText] = useState('Light Mode');

  const toggleMode= () => {
    if(mode === 'light' && modeText==='Light Mode'){
      setMode('dark');
      setmodeText('Dark Mode');
      document.body.style.backgroundColor='#373a3d';
      document.body.style.color='white';
    }
    else if(mode === 'dark' && modeText==='Dark Mode'){
      setMode('light');
      setmodeText('Light Mode');
      document.body.style.backgroundColor='white';
      document.body.style.color='#212529';
    }
  }


  return (
    <>
    <Alert/>
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} modeText={modeText}/>
    <div className="container my-3">
    <Routes>
      <Route path="/" element={<TextForm heading='Enter the text to convert it.'/>}/>
      <Route exact path ="/Home" element={<TextForm  heading='Enter the text to convert it.'/>}/>
      <Route exact path ="/About" element={<About/>}/>
      <Route exact path ="/Card" element={<Card/>}/> {/*Exact should be used in order to make routes path more accurate and less prone to errors.*/}
    </Routes>
    </div>
    </>
  );
}

export default App;

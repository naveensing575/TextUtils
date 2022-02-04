import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import './App.css';
// import About from './Components/About';
// import Card from './Components/Card';
import TextForm from './Components/TextForm';


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
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} modeText={modeText} />
    {/* <Card/> */}
    <div className="container my-3">
    <TextForm heading='Enter the text to convert it.'/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;

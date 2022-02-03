import React,{useState} from 'react';

function TextForm(props) {
    const handleUpClick=()=>{
        let newText= Text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
        let newText= Text.toLowerCase();
        setText(newText);
    }
    const handleCopy=()=>{
        let newText= document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }
    const handleClickClear=()=>{
        setText('');
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [Text, setText] = useState('');

  return (
      <>
    <div className="container mb-3">
    <h3>{props.heading}</h3>
    <textarea className="form-control" id="myBox" rows="3" value={Text} onChange={handleOnChange}></textarea>
    </div>
    <div className="container">
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-danger" onClick={handleClickClear}>Clear All</button>
    <button className="btn btn-success mx-3" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-4">
        <h3>Counter</h3>
        <p>Word Count = {Text.split(/[^\s]+/).length-1} and Character Count = {Text.length} </p>
        <p>Time to read in minute = {0.08* Text.split(" ").length} </p>
    </div>
    </>
  );
}

export default TextForm;

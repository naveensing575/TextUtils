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
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [Text, setText] = useState('');

  return (
      <>
    <div className="mb-3">
    <h3>{props.heading}</h3>
    <textarea className="form-control" id="myBox" rows="3" value={Text} onChange={handleOnChange}></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
    </>
  );
}

export default TextForm;

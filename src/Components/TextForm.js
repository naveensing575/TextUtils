import React from 'react';

function TextForm(props) {
  return (
      <>
    <div className="mb-3">
    <label for="myBox" class="form-label"><h3>{props.heading}</h3></label>
    <textarea className="form-control" id="myBox" rows="3"></textarea>
    </div>
    <button className="btn btn-primary">Convert to Uppercase</button>
    </>
  );
}

export default TextForm;

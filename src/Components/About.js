import React from 'react';

export default function About() {
  return (
    <>
    <div className="container">
    <h2>About Us</h2>
        <div className="accordion my-3" id="accordionExample"  style={{color:'black'}}>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Who We Are?
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>Text-Utils.com</strong> is one of the most powerful, secure and free websites containing various tools for helping with your daily tasks, such as online formatters (XML, JSON, SQL and HTML), encoding (Base64, Hashes), converters (binary, XML, JSON), multiple text tools, such as to remove duplicate lines, extract text and much more. Enjoy all for free!
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                What We Provide?
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>We provide free tools to help you with your daily tasks.</strong> You will find tools for formatting source code, converters, tools for handling text, such as remove duplicate characters, empty lines, text sorter and many others. Check the current features below and feel free to recommend a new feature by contacting us.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                New Features!
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>A rest for your eyes - dark mode is now available.</strong>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>  
  );
}

import React from 'react';

function Card() {
   const  styleName={
        width: "18rem",
        margin: '2rem'
    }
    const invert={
      color:'black'
  }
  return (
      <>
      <div className='container mx-4'>
      <h2>Cards</h2>
      </div>
    <div className='container' style={{display:'inline-flex'}}>
    <div className="card" style={styleName}>
    <img src="..." className="card-img-top" style={{backgroundColor: 'silver', height: '8rem'}} alt="..."/>
    <div className="card-body" style={invert}>
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="/" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div className="card" style={styleName}>
    <img src="..." className="card-img-top" style={{backgroundColor: 'silver', height: '8rem'}} alt="..."/>
    <div className="card-body" style={invert}>
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="/" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div className="card" style={styleName}>
    <img src="..." className="card-img-top" style={{backgroundColor: 'silver', height: '8rem'}} alt="..."/>
    <div className="card-body" style={invert}>
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="/" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div className="card" style={styleName}>
    <img src="..." className="card-img-top" style={{backgroundColor: 'silver', height: '8rem'}} alt="..."/>
    <div className="card-body" style={invert}>
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="/" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  </div>
  </>
  );
}

export default Card;

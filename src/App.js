import Navbar from './Components/Navbar';
import './App.css';
import About from './Components/About';
// import Card from './Components/Card';
// import TextForm from './Components/TextForm';


function App() {
  return (
    <>
    <Navbar title='TextUtils'/>
    {/* <Card/> */}
    <div className="container my-3">
    {/* <TextForm heading='Enter the text to convert it.'/> */}
    <About/>
    </div>
    </>
  );
}

export default App;

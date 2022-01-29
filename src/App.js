import Navbar from './Components/Navbar';
// import Card from './Components/Card';
import TextForm from './Components/TextForm';
import './App.css';

function App() {
  return (
    <>
    <Navbar title='TextUtils'/>
    {/* <Card/> */}
    <div className="container my-3">
    <TextForm heading='Enter the text to analyze below'/>
    </div>
    </>
  );
}

export default App;

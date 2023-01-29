import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
     {/* <Home></Home>
     <About></About>
     <Contact></Contact> */}


<Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;

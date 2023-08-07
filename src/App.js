import './App.css';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom'

import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import WorkingWithUs from './Components/WorkingWithUs/WorkingWithUs';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import Software from './Components/Software/Software';

function App() {
  return (
    <Router>
    <NavBar/>
    <About/>
    <Services/>
    <Software/>
    <WorkingWithUs/>
    <Footer/>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './components/Routing.js';

import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

import ScrollToTop from './components/ScrollToTop.js';




function App() {
  return (
    <> 
    <Router>
    <ScrollToTop />

    <NavBar />
    <Routing />
    <Footer /> 
    </Router>


    </>
  );
}

export default App;

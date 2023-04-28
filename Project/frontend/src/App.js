import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './components/Routing.js';

import './App.css';
import NavBar from './components/NavBar.js';
import Explore from './pages/Explore.js';
import Footer from './components/Footer.js';
import ProductItem from './pages/ProductItem.js';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import Shipping from './pages/Shipping.js';
import Options from './components/Options.js';
import Cart from './pages/Cart.js';
import Home from './pages/Home.js';
import RecommendedProduct from './components/RecommendedProduct.js';




function App() {
  return (
    <> 
    <Router>

    <NavBar />
    <Routing />
    <Footer /> 
    </Router>


    </>
  );
}

export default App;

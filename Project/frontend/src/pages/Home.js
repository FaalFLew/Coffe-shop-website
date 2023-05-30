import chocolate from '../img/chocolate.jpg';
import machine from '../img/machine.jpg';
import pancakes from '../img/pancakes.jpg';
import product1 from '../img/Product 1.png';
import product2 from '../img/Product 2.png';
import product3 from '../img/Product 3.png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import RecommendedProduct from '../components/RecommendedProduct';

import '../css/Home.css'


const Home = () => {
  const location = useLocation();
  const orderSuccess = location.state && location.state.orderSuccess;
  return (
    <>

      {/* The rest of your Home component */}
      <section className="hero-section">
      {orderSuccess ? (
        <h1 style={{color:'aqua'}}>Thank You For the Order!</h1>
        ):<h1>Welcome To Pure Coffee</h1>}
    <p>Experience café-quality coffee in the comfort of your own home with our premium coffee beans</p>
    <Link to="/explore" className="link-button">Explore</Link>
  </section>

<main>
  <section className="featured-products">
    <figure className="featured-product-item">
      <Link to="/productItem/9">
      <img src={chocolate} alt="Dark chocolate" width="400px"/>
      <figcaption>
        <h2>Dark Chocolate</h2>
        <p className=""><em>Indulge in the rich, decadent flavor of our premium chocolate - a treat for the senses.</em></p>
      </figcaption>
    </Link>

    </figure>

    <figure className="featured-product-item">
      <Link to="/productItem/8">
      <img src={pancakes} alt="Fluffy pancakes" width="400px"/>
      <figcaption>
        <h2><b>Fluffy Pancakes</b></h2>
        <p className=""><em>Start your day off right with our <br/>
          fluffy, delicious pancakes - <br/> the perfect breakfast for champions</em></p>
      </figcaption>
    </Link>

    </figure>

    <figure className="featured-product-item">
    <Link to="/productItem/13">
      <img src={machine} alt="Brewing machine" width="400px"/>
      <figcaption>
        <h2><b>Premium Coffee Machine</b></h2>
        <p className=""><em>Experience café-quality coffee in the comfort of your own home with our premium coffee machine.</em></p>
      </figcaption>
    </Link>
    </figure>

<div className="button-container">
  <Link className="explore-link" to="/underConstruction">View Similar Products</Link>
</div>
  </section>





  <div className="heading-container"> <h2>Explore Some of our Premium Coffee Beans</h2></div>
  <section className="coffee-products">
    <figure className="featured-product-item">
      <Link to="/productItem/12">
      <img src={product1} alt="Ground coffee" width="400px"/>
      <figcaption>
        <h2>Brazillian Coffee</h2>
        <p className=""><em>Indulge in the rich, decadent flavor of our premium Brazillian Coffee - a coffee for the senses.</em></p>
      </figcaption>
    </Link>

    </figure>

    <figure className="featured-product-item">
      <Link to="/productItem/11">
      <img src={product2} alt="Green tea" width="400px"/>
      <figcaption>
        <h2><b>Green Tea</b></h2>
        <p className=""><em>Start your day off right with our green tea, delicious tea - <br/>the perfect tea for champions.</em></p>
      </figcaption>
    </Link>
    </figure>

    <figure className="featured-product-item">
    <Link to="/productItem/10">
      <img src={product3} alt="Ground coffee" width="400px"/>
      <figcaption>
        <h2><b>Peru Coffee Beans</b></h2>
        <p className=""><em>Experience Peru Coffee Beans in the comfort of your own home with our premium coffee machine.</em></p>
      </figcaption>
    </Link>
    </figure>

    <div className="button-container">
      <Link className="explore-link" to="/underConstruction">View Similar Products</Link>
    </div>

  </section>
<RecommendedProduct />
<div className='image-section'>

</div>
</main>
</>
  )
}

export default Home
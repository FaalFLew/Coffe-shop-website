import chocolate from '../img/chocolate.jpg';
import machine from '../img/machine.jpg';
import pancakes from '../img/pancakes.jpg';
import product1 from '../img/Product 1.png';
import product2 from '../img/Product 2.png';
import product3 from '../img/Product 3.png';

import RecommendedProduct from '../components/RecommendedProduct';

import '../css/Home.css'


const Home = () => {
  return (
    <>
      <section className="hero-section">
    <h1>Welcome To Pure Coffee</h1>
    <p>Experience café-quality coffee in the comfort of your own home with our premium coffee beans</p>
    <a href="#" className="link-button">Explore</a>
  </section>

<main>
  <section className="featured-products">
    <figure className="featured-product-item">
      <a href="#">
      <img src={chocolate} width="400px"/>
      <figcaption>
        <h2>Dark Chocolate</h2>
        <p className=""><em>Indulge in the rich, decadent flavor of our premium chocolate - a treat for the senses.</em></p>
      </figcaption>
    </a>

    </figure>

    <figure className="featured-product-item">
      <a href="#">
      <img src={pancakes} width="400px"/>
      <figcaption>
        <h2><b>Fluffy Pancakes</b></h2>
        <p className=""><em>Start your day off right with our <br/>
          fluffy, delicious pancakes - <br/> the perfect breakfast for champions</em></p>
      </figcaption>
    </a>

    </figure>

    <figure className="featured-product-item">
    <a href="#">
      <img src={machine} width="400px"/>
      <figcaption>
        <h2><b>Premium Coffee Machine</b></h2>
        <p className=""><em>Experience café-quality coffee in the comfort of your own home with our premium coffee machine.</em></p>
      </figcaption>
    </a>
    </figure>

<div className="button-container">
  <a className="explore-link" href='#'>View Similar Products</a>
</div>
  </section>





  <div className="heading-container"> <h2>Explore Some of our Premium Coffee Beans</h2></div>
  <section className="coffee-products">
    <figure className="featured-product-item">
      <a href="#">
      <img src={product1} width="400px"/>
      <figcaption>
        <h2>Choclate Snack</h2>
        <p className=""><em>Indulge in the rich, decadent flavor of our premium chocolate - a treat for the senses.</em></p>
      </figcaption>
    </a>

    </figure>

    <figure className="featured-product-item">
      <a href="#">
      <img src={product2} width="400px"/>
      <figcaption>
        <h2><b>Ground coffee second</b></h2>
        <p className=""><em>Start your day off right with our fluffy, delicious pancakes - <br/>the perfect breakfast for champions.</em></p>
      </figcaption>
    </a>
    </figure>

    <figure className="featured-product-item">
    <a href="#">
      <img src={product3} width="400px"/>
      <figcaption>
        <h2><b>Ground coffee second</b></h2>
        <p className=""><em>Experience café-quality coffee in the comfort of your own home with our premium coffee machine.</em></p>
      </figcaption>
    </a>
    </figure>

    <div className="button-container">
      <a className="explore-link" href='#'>View Similar Products</a>
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
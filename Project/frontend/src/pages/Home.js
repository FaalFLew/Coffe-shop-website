import chocolate from '../img/chocolate.jpg';
import machine from '../img/machine.jpg';
import pancakes from '../img/pancakes.jpg';
import product1 from '../img/Product 1.png';
import product2 from '../img/Product 2.png';
import product3 from '../img/Product 3.png';
import '../css/Home.css'


const Home = () => {
  return (
    <>
      <section class="hero-section">
    <h1>Welcome To Pure Coffe</h1>
    <p>Experience café-quality coffee in the comfort of your own home with our premium coffee beans</p>
    <a href="#" class="link-button">Explore</a>
  </section>

<main>
  <section class="featured-products">
    <figure class="featured-product-item">
      <a href="#">
      <img src={chocolate} width="400px"/>
      <figcaption>
        <h2>Dark Chocolate</h2>
        <p class=""><em>Indulge in the rich, decadent flavor of our premium chocolate - a treat for the senses.</em></p>
      </figcaption>
    </a>

    </figure>

    <figure class="featured-product-item">
      <a href="#">
      <img src={pancakes} width="400px"/>
      <figcaption>
        <h2><b>Fluffy Pancakes</b></h2>
        <p class="">Start your day off right with our <br/>
          fluffy, delicious pancakes - <br/> the perfect breakfast for champions</p>
      </figcaption>
    </a>

    </figure>

    <figure class="featured-product-item">
    <a href="#">
      <img src={machine} width="400px"/>
      <figcaption>
        <h2><b>Premium Coffe Machine</b></h2>
        <p class=""><em>Experience café-quality coffee in the comfort of your own home with our premium coffee machine.</em></p>
      </figcaption>
    </a>
    </figure>

<div class="Button-container">
  <button class="">Explore Products</button>
</div>
  </section>





  <div class="heading-container"> <h2>Explore Some of our Premium Coffe Beans</h2></div>
  <section class="coffe-products">
    <figure class="featured-product-item">
      <a href="#">
      <img src={product1} width="400px"/>
      <figcaption>
        <h2>Choclate Snack</h2>
        <p class=""><em>Indulge in the rich, decadent flavor of our premium chocolate - a treat for the senses.</em></p>
      </figcaption>
    </a>

    </figure>

    <figure class="featured-product-item">
      <a href="#">
      <img src={product2} width="400px"/>
      <figcaption>
        <h2><b>Ground coffe second</b></h2>
        <p class="">Start your day off right with our fluffy, delicious pancakes - <br/>the perfect breakfast for champions.</p>
      </figcaption>
    </a>
    </figure>

    <figure class="featured-product-item">
    <a href="#">
      <img src={product3} width="400px"/>
      <figcaption>
        <h2><b>Ground coffe second</b></h2>
        <p class=""><em>Experience café-quality coffee in the comfort of your own home with our premium coffee machine.</em></p>
      </figcaption>
    </a>
    </figure>

    <div class="Button-container">
      <button>Explore Products</button>
    </div>

  </section>

</main>
</>
  )
}

export default Home
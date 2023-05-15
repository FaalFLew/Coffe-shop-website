import '../css/Global.css';
import '../css/Explore.css';
import ProductCardItem from '../components/ProductCardItem.js';
import Img from '../img/chocolate.jpg';
import { useEffect,useState } from 'react';
import axios from 'axios';

const Explore = () => {
  
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
}, []);
  

function getProducts() {

  axios.get('http://group15.web-tek.ninja/backend/api/login.php').then(function(response) {
      console.log(response.data);
      setProducts(response.data);
  });
}
  return (
<main class="explore-products">
    <div className="cart-card-container"></div>
<h1>Products</h1>
  <div className="products">

{/* create a function that displays elements from db
if empty then "no products to show here" message */}
{products.length > 0 ? (
  products.map((product,key) => (
    <ProductCardItem key={key} source={`/productItem/${product.Product_id}`} title={product.Name} price={product.Price} type={product.Product_type} weight={`${product.Weight}g`} img={`${process.env.PUBLIC_URL}/img/${product.Image}`}/>
  ))
) : (
  <p>No products to show here</p>
)}
   <ProductCardItem source={"/productItem"} />
   <ProductCardItem img={Img}/>
   <ProductCardItem />
   <ProductCardItem />
   <ProductCardItem />
   <ProductCardItem />
   <ProductCardItem />
   <ProductCardItem />
   <ProductCardItem />
   <ProductCardItem />
   <ProductCardItem />
   <ProductCardItem />



    </div>
    

</main>
  )
}

export default Explore
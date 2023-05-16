import '../css/Global.css';
import '../css/RecommendedProduct.css';
import logo from '../img/chocolate.jpg';
import { useEffect,useState } from 'react';
import RecommendedProductItem from './RecommendedProductItem.js';

import axios from 'axios';
const RecommendedProduct = () => {
  
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
    <section className="recommended-products">
    <h2>Recommended Products</h2>
    <ul className="carousel x-slide">
{/* create a function that displays elements from db
if empty then "no products to show here" message */}
{products.length > 0 ? (
  products.map((product,key) => (
    <RecommendedProductItem key={key} source={`/productItem/${product.Product_id}`} title={product.Name} price={product.Price} type={product.Product_type} weight={`${product.Weight}g`} img={`${process.env.PUBLIC_URL}/img/${product.Image}`} imgAlt={product.Image_alt}/>
  ))
) : (
  <p>No products to show here</p>
)}

      

    </ul>
  </section>

 

  )
}

export default RecommendedProduct
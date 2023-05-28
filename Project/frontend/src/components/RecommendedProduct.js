import '../css/Global.css';
import '../css/RecommendedProduct.css';
import logo from '../img/chocolate.jpg';
import { useEffect,useState } from 'react';
import RecommendedProductItem from './RecommendedProductItem.js';

import axios from 'axios';
const RecommendedProduct = ({currentProductId}) => {
  
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
}, []);
  

function getProducts() {

  axios.get('https://group15.web-tek.ninja/backend/api/login.php').then(function(response) {
      console.log(response.data);
      setProducts(response.data);
  }).catch(function (error) {
    console.log(error);
    setProducts([]); 
  });
}

const recommended = Array.isArray(products) ? products.filter((product) => product.Product_id !== currentProductId) : [];


  return (
    <section className="recommended-products">
    <h2>Recommended Products</h2>
    <ul className="carousel x-slide">
{/* create a function that displays elements from db
if empty then "no products to show here" message */}
{recommended.length > 0 ? (
  recommended.map((product,key) => (
    <RecommendedProductItem key={key} source={`/productItem/${product.Product_id}`} title={product.Name} price={product.Price} img={`${process.env.PUBLIC_URL}/img/${product.Image}`} imgAlt={product.Img_alt}/>
  ))
) : (
  <p>No products to show here</p>
)}

      

    </ul>
  </section>

 

  )
}

export default RecommendedProduct
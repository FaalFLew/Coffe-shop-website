import '../css/Global.css';
import '../css/Explore.css';
import '../css/CardPopup.css'
import ProductCardItem from '../components/ProductCardItem.js';
import CardPopup from '../components/CardPopup.js';

import Img from '../img/chocolate.jpg';
import { useEffect,useState } from 'react';
import axios from 'axios';

const Explore = () => {
  
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
return (
  <main className="explore-products">
    <h1>Products</h1>
    <div className="products">
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product, key) => (
          <ProductCardItem
            key={key}
            source={`/productItem/${product.Product_id}`}
            title={product.Name}
            price={product.Price}
            type={product.Product_type}
            weight={product.Weight}
            img={`${process.env.PUBLIC_URL}/img/${product.Image}`}
            imgAlt={product.Img_alt}
          />
        ))
      ) : (
        <p>No products to show here</p>
      )}
    </div>
  </main>
);
};

export default Explore;
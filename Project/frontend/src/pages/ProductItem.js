import '../css/ProductItem.css'
import '../css/Global.css'
import AddToCart from '../components/AddToCart.js'; 
import QuantityCounter from '../components/QuantityCounter.js';
import RecommendedProduct from '../components/RecommendedProduct';
import {useParams} from "react-router-dom";
import { useEffect,useState } from 'react';
import axios from 'axios';

const ProductItem = () => {
  const [productDetails, setProductDetails] = useState({});
  const {id} = useParams();
  useEffect(() => {
    getProductDetails();
}, []);

function getProductDetails() {
    axios.get(`http://group15.web-tek.ninja/backend/api/login.php/${id}`).then(function(response) {
        console.log(response.data);
        setProductDetails(response.data);
    });
}
  return (
<main className="product-item-container">
    <div className="product-item">

        <div className="product-single-image-container"> 
          <figure className="product-single-image"> {/*added single to className */}
          {productDetails && productDetails.Image &&  <img src={`${process.env.PUBLIC_URL}/img/${productDetails.Image}`} alt=" Coffee Bag " />}
          </figure>
        </div>

        <div className="product-content-container"> 
         <div className="product-information-container">
            <div className="product-details">
            {productDetails?.Name && <h1 className="product-single-title">{productDetails.Name} </h1>}              
            <h2 className="product-description-header">Product Description</h2>
            {productDetails?.Description && <p className="product-description">{productDetails.Description}</p>}
            </div>
            <div className="product-producer-details">
            {productDetails?.Ingredients && <details><summary className="product-extra-details">Product Ingredients</summary> {productDetails.Ingredients}</details>}
            <details><summary className="product-extra-details">Producer Information</summary> insert production country, suggestions on usage and more.</details>
            </div>
         </div>
         {productDetails?.Price && <div className='product-price'> ${productDetails.Price}</div>}

         <QuantityCounter />

         <div className="button-container">
         <AddToCart width={"100%"}/>
         </div>
        </div>
    </div>

<RecommendedProduct />

</main>
  )
}

export default ProductItem
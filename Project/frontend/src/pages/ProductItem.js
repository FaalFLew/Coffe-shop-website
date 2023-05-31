import '../css/ProductItem.css'
import '../css/Global.css'
import AddToCart from '../components/AddToCart.js'; 
import '../css/CardPopup.css'
import CardPopup from '../components/CardPopup.js';
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
}, [id]);

function getProductDetails() {
    axios.get(`https://group15.web-tek.ninja/backend/api/products.php/${id}`).then(function(response) {
        console.log(response.data);
        setProductDetails(response.data);
    }).catch(function (error) {
      console.log(error);
      setProductDetails([]);
    });
}

const addToCart = () => {

const cart = JSON.parse(localStorage.getItem('cart')) || {};
  const productId = productDetails.Product_id;
  if (!cart[productId]) {
    cart[productId] = {
      id:productDetails.Product_id,
      title:productDetails.Name,
      price: productDetails.Price,
      description: productDetails.Description,
      image: productDetails.Image,
      image_alt:productDetails.Img_alt,
      count: 1,
    };
    localStorage.setItem('cart', JSON.stringify(cart));

  } else {
    cart[productId].count += 1;
  }
  console.log(cart);
}

const params = useParams();
const productId = parseInt(params.id);

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
         {productDetails?.Price && <div className='product-price'> <b>Price</b><p><em>${productDetails.Price}</em></p></div>}

         <QuantityCounter />

         <div className="button-container">
         <AddToCart width={"100%"} clicked={addToCart}/>
         </div>
        </div>
    </div>

<RecommendedProduct currentProductId={productId}/>

</main>
  )
}

export default ProductItem
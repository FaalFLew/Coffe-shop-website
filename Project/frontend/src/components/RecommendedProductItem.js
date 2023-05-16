import React from 'react'
import logo from '../img/chocolate.jpg';
import {Link} from 'react-router-dom';

const RecommendedProductItem = ({img, title, weight, type,price,source, imgAlt}) => {
  return (
    <li className="item">
    <Link to={source} className="product-card-link">
    <figure className="content-image">
      <img src={img} alt={imgAlt} />
      <figcaption className="content-info">
          <h3 className="content-title">
            {title}
          </h3>
          <span>${price}</span>
      </figcaption>
    </figure>
    </Link>
  </li>
  )
}

export default RecommendedProductItem
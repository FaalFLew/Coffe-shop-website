import React from 'react'
import {Link} from 'react-router-dom';

const RecommendedProductItem = ({img, title, weight, type,price,source, imgAlt}) => {
  return (
    <Link to={source} className="product-card-link">

    <li className="item">
    <figure className="content-image">
      <img src={img} alt={imgAlt} />
      <figcaption className="content-info">
          <h3 className="content-title">
            {title}
          </h3>
          <span>${price}</span>
      </figcaption>
    </figure>
  </li>
  </Link>

  )
}


RecommendedProductItem.defaultProps = {
  imgAlt: 'Recommended product',
}


export default RecommendedProductItem
import React from 'react'
import { Link } from 'react-router-dom'

const NewProduct = ({product}) => {
  return (
    <div className="npc-group">
      <Link to={`/product/${product._id}`}>
        <div className="npc-body">
          <img
            src={product.image}
            className="product-img"
            alt={product.title}
          />
        </div>
        <div className="npc-footer">
          <div className="npc-footerDiv">
            <span className="npc-category">{product.subcategory}</span>
            <h3 className="npc-titleProduct">{product.title}</h3>
            <div className="npc-footerSubDiv">
              <span className="npc-price">$ {product.price}</span>
              <span className="npc-star"> {product.star} &#9733;</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default NewProduct

// ProductDetail.js
// Handles the specific details of a product and allows the user to add the product to the cart
import * as React from 'react';

// Product Detail Component
// product: The product object to display details for
// showCartButton: A blank (undefined) value to indicate whether or not to display the add to cart button
const ProductDetail = ({ product}) => {

  // Return the product details component
  return (
    <div>
      {/* Add any details you want to display in the popup*/}
      <h1><u>Forum:</u></h1>
      <h2>{product.name}</h2>
      <p><u>Description: </u> <br/> {product.description}</p>
      <p>Price: ${product.price}</p>
      <p>id:<i>{product.id}</i> Brand: <i>{product.brand}</i>, Size: <i>{product.size}</i>, Category: <i>{product.category}</i></p>

        {/*<img src={product.image} alt={" "} style={{ width: '100px', height: '100px' }} />*/}
      
      {/* Added to cart button */}
      
      <br/>
    </div>
  );
};

export default ProductDetail;

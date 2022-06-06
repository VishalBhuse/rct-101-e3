import React, { useEffect, useState } from "react";
import axios from "axios";
const Product = () => {
  // Note: this id should come from api

  const [product, setproduct] = useState([]);
  const [count, setcount] = useState(1);

  const addincr = ()=>{
    if(product){
      setcount (count +1)
      
    }
  }
  const remincr = ()=>{
    if(count > 1)
    setcount (count -1)
  }

 
  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then(({ data }) =>
      {        
        console.log(data)
        setproduct(data)
      } 
      );
  }, []);

  // const product = { id: 1 };
  return (
  <>
  
    {
      product.map((product)=>{
        return (
          <div data-cy={`product-${product.id}`} key={product.id} >
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={addincr}>+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems            
            count 
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={remincr}>-</button>
        <button data-cy="product-remove-cart-item-button" >Remove from cart</button>
      </div>
    </div>
        )
      })
    }
    
    
    </>

  );
};

export default Product;

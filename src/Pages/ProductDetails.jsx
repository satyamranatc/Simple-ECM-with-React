import React from 'react'

export default function ProductDetails({products,Index}) {
  console.log("Data:",products[Index]);
  return (
    <div>
      <center>
        <h1>Product Details</h1>
        <hr />
        <h2>{products[Index].name}</h2>
        <p>Category: {products[Index].category}</p>
        <p>Description: {products[Index].desc}</p>
        <p>Price: ${products[Index].price.toLocaleString()}</p>
        <img src={products[Index].image} alt={products[Index].name} />
      </center>
    </div>
  )
}

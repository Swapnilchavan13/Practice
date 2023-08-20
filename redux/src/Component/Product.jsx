import React from 'react'

const Product = () => {
  const click = ()=>{
    alert("Button Clicked")
  }
  return (
    <>
    <div>Product</div>
    <input type="text" name="" id="" />
    <button onClick={click}>click</button>
    </>
  )
}
export default Product;
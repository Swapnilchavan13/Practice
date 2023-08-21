import React, { useState } from 'react'

const Product = () => {
  const [typedata, setTypedata]= useState('')
  const [value, setValue]= useState('')


  const handaleinputChange = (e)=>{
    setValue(e.target.value)
  }

  const click = ()=>{
    setTypedata(value)
  }
  return (
    <>
    <div>Product</div>
    <input type="text" name="" id="" onChange={handaleinputChange}/>
    <button onClick={click}>click</button>
    <div>
      <h2>{typedata}</h2>
    </div>
    </>
  )
}
export default Product;
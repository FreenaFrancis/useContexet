import React, { useEffect, useState } from 'react'

function SingleProduct({prod,cart,setCart}) {
  // console.log(cart);
  const[total,setTotal]=useState()
  useEffect(()=>{
setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0))
  },[cart])
  return (
    <div className='products'>
      <img src={prod.image} alt={prod.name}/>
      <div className="productDesc">
        <span style={{fontWeight:700}}>{prod.name}</span>
        <span>${prod.price.substring(0,3)}</span>
      </div>
      {cart.includes(prod)?(
           <button className='add' onClick={()=>{
            setCart(cart.filter(c=>c.id!==prod.id))  
            }}>Remove cart</button>
      ):(      <button className='add' onClick={()=>{
        setCart([...cart,prod])  
        }}>Add to cart</button>)}

   
    </div>
  )
}

export default SingleProduct

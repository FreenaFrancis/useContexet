import React from 'react'
import SingleProduct from './SingleProduct'

function Cart({cart,setCart}) {
  return (
    <div>
    <span style={{fontSize:30}}>My cart </span>
    <br/>
    <span style={{fontSize:30}}>Total : Rs.100</span>
    <div className="productContainer">
     {cart.map(prod=>(
      <SingleProduct prod={prod} key={prod.id} cart={cart} setCart={setCart}/>
     ))} 
    </div>
    
    </div>
  )
}

export default Cart

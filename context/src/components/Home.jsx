import React, { useState } from 'react';
import SingleProduct from './SingleProduct';
import { faker } from '@faker-js/faker';
// import faker from 'faker';
import './style.css'

faker.seed(100
  )
function Home({cart,setCart}) {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));
  // console.log(productsArray);


  const [products] = useState(productsArray);

console.log(cart);
  return (
    <div className='productContainer'>
      {products.map((prod, index) => (
        <SingleProduct key={index} prod={prod} cart={cart} setCart={setCart}/>
      ))}
    </div>
  );
}

export default Home;

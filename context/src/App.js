import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path='/' exact element={<Home cart={cart} setCart={setCart}/>}/>
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

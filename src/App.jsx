import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Indoor_plants from './pages/Plants/indoor-plants/Indoor_plants';
import Outdoor_plants from './pages/Plants/outdoor_plants/Outdoor_plants';
import Plants from './pages/Plants/Plants';
import Cart from './components/cart/Cart';
import Services from './pages/services/Services';

function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    const isPresent = cart.some(product => product.id === item.id);
    if (!isPresent)
      setCart(prevCart => [...prevCart, item]); // Use functional form of setCart
  };

  useEffect(() => {
    console.log(cart); // Log the updated value of cart after each state update
  }, [cart]);

  return (
    <>
      <Navbar size={cart.length} />
      <Cart />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Plants' element={<Plants handleClick={handleClick} />} />
        <Route path='Services' element={<Services />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='Indoor_plants' element={<Indoor_plants />} />
        <Route path='outdoor_plants' element={<Outdoor_plants />} />
      </Routes>
    </>
  );
}

export default App;

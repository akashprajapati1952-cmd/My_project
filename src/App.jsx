import React, { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Content from './Content.jsx'
import Productdetail from './Productdetail.jsx'
import PageNotFound from './PageNotFound.jsx'



function App() {
  const [cart, setCart]=useState({});
  function handleCartCount(productId, number){
    const oldnumber=cart[productId] || 0 ;
    setCart({...cart, [productId] : oldnumber+number});
  };
  const totleCount=+Object.keys(cart).reduce(function(previous, current){
    return previous + cart[current]
  }, 0);
  

  return (
    <div className="flex flex-col relative bg-gray-200">
      <Header src="/logo.png" data={totleCount}/>
      <div className="relative flex flex-col justify-center mx-5 my-2 sm:mx-20 sm:my-7  bg-white w-[calc(100vw-40px)] h-[calc(90vh-16px)] sm:h-[calc(90vh-56px)]  sm:w-[calc(100vw-160px)]">
        <Routes>
          <Route index element={<Content></Content>}/>
          <Route path="/product/:id" element={<Productdetail handleCartCount={handleCartCount}></Productdetail>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </div>
      <Footer/>
     
    </div>
  )
}

export default App

import React, { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Content from './Content.jsx'
import Productdetail from './Productdetail.jsx'



function App() {
  
  const [count, setCount] = useState(0)
  const path=window.location.pathname;

  return (
    <div className="flex flex-col relative bg-gray-200">
      <Header src="/Amazon.png"/>
      <div className="relative flex flex-col box-border mx-5 my-2 sm:mx-20 sm:my-7 grow bg-white min-h-[calc(90vh-16px)] sm:min-h-[calc(90vh-56px)]">
        <Routes>
          <Route index element={<Content></Content>}/>
          <Route path="/product/:id" element={<Productdetail></Productdetail>}/>
        </Routes>
    </div>
      <Footer/>
     
    </div>
  )
}

export default App

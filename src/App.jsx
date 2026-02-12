import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Product from './Product.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Content from './Content.jsx'
import Products from './Products.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="flex flex-col relative bg-gray-200">
      <Header path="Amazon.png">
      </Header>
      <Content></Content>
      <Footer></Footer>
     
    </div>
  )
}

export default App

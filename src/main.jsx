import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './page/Home'
import { BrowserRouter , Routes, Route } from 'react-router'
import ShoppingCart from './page/ShoppingCart'
import About from './page/About'
import Products from './page/Products'
import Productsdetails from './page/Productsdetails'


createRoot(document.getElementById('root')).render(
  
    <BrowserRouter basename="/E-Commerce/" >
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/Cart"} element={<ShoppingCart/>}/>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/products/:catslug?"} element={<Products/>}/>
        <Route path={"/productsdetails/:slug"} element={<Productsdetails/>}></Route>
      </Routes>
    </BrowserRouter >
 
)

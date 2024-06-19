import React  from 'react'
import { BrowserRouter,Router,  Routes, Route } from "react-router-dom";
import AllProducts from "./components/AllProducts"
import ProductDetail from "./components/ProductDetails"

export default function App() {


  return (
      <BrowserRouter>
            <Routes>
              <Route path="/" exact Component={AllProducts} />
              <Route path="/categories/:category/products/:productId" Component={<ProductDetail />} />
            </Routes>
        </BrowserRouter>
      
  )
}

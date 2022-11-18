import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Components/Home'
import Create_Product from './Components/Create_Product'
import Admin from './Components/Admin'
import Product_List from './Components/Product_List'
import Edit_Products from './Components/Edit_Products'

const App = () => {
  return <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Create_Product' element={<Create_Product/>}/>
        <Route path='/Product_List' element={<Product_List/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/Edit_PRoducts' element={<Edit_Products/>}/>
      </Routes>
      </Router>
    </>
}

export default App
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'


import {HomePage,
  PrivateRoute,
  ProductsPage,
  SingleProductPage,
  Error,
  Cart,
  Checkout,
  About,
  AuthWrapper} from './pages'

function App() {
  return (
    <AuthWrapper>
    <Router>
         <Navbar/>
         <Sidebar/>
         <Routes>

           <Route path='/' element={<HomePage/>}/>
           <Route path='about' element={<About/>}/>
           <Route path='cart' element={<Cart/>}/>
           <Route path='products' element={<ProductsPage/>}/>
           <Route path='products/:id' element={<SingleProductPage/>}/>
           <Route path='checkout' element={
            <PrivateRoute exact path='/checkout'>
                 <Checkout/>
            </PrivateRoute>
            
           }/>
          <Route path='*' element={<Error/>}/>  
         </Routes> 
         <Footer/> 
    </Router>
    </AuthWrapper>
  )
}

export default App

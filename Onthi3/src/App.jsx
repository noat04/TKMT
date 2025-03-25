import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './page/NotFound'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './page/Home'
import Cart from './page/Cart'
import BookDetail from './page/BookDetail'
import { CartProvider } from './component/CartContext'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CartProvider>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/bookdetail/:id' element={<BookDetail />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </CartProvider>
    </>
  )
}

export default App

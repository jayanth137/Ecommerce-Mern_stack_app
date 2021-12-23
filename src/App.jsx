import Cart from './Pages/Cart'
import Home from './Pages/Home'
import { Login } from './Pages/Login'
import Product from './Pages/Product'
import ProductList from './Pages/ProductList'
import Register from './Pages/Register'
import { Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default App

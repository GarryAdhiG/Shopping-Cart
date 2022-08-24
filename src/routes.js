import React from 'react';
import Products from './components/products';
import ProductDetail from './components/productDetail';
import Cart from './components/cart';
import { Routes, Route } from 'react-router-dom';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route element={<Products />} path="/" />
            <Route element={<ProductDetail />} path="product/:productId" />
            <Route element={<Cart />} path="/cart" />
            <Route element={<h1>Page Not Found</h1>} path="*" />
        </Routes>
    );
}

export default RoutesComponent;
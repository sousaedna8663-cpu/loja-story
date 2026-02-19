import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Carrinho from './pages/Carrinho';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import './App.css';

function AppContent() {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });

  const navigate = useNavigate();

  // Salvar carrinho no localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const cartCount = cartItems.reduce((total, item) => total + item.quantidade, 0);

  const onAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantidade: 1 }];
      }
    });
    alert('✅ Produto adicionado ao carrinho!');
  };

  const onUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      onRemoveFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId
            ? { ...item, quantidade: newQuantity }
            : item
        )
      );
    }
  };

  const onRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const onClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header cartCount={cartCount} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onAddToCart={onAddToCart} />} />
          <Route path="/produtos" element={<Produtos onAddToCart={onAddToCart} />} />
          <Route 
            path="/carrinho" 
            element={
              <Carrinho 
                cartItems={cartItems}
                onUpdateQuantity={onUpdateQuantity}
                onRemoveFromCart={onRemoveFromCart}
                onClearCart={onClearCart}
              />
            } 
          />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;





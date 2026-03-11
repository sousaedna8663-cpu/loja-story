import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Home } from './pages/home';
import Produtos from './pages/Produtos';
import { ProductDetailPage } from './pages/ProductDetailPage';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Carrinho from './pages/Carrinho';
import './App.css';

export default function App() {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const cartCount = cartItems.reduce((total, item) => total + item.quantidade, 0);

  const onAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantidade: 1 }];
    });
  };

  const onUpdateQuantity = (productId, quantidade) => {
    if (quantidade <= 0) {
      onRemoveFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantidade } : item
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
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header cartCount={cartCount} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onAddToCart={onAddToCart} />} />
            <Route path="/produtos" element={<Produtos onAddToCart={onAddToCart} />} />
            <Route path="/produto/:id" element={<ProductDetailPage onAddToCart={onAddToCart} />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header({ cartCount }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="navbar-brand flex items-center gap-2 text-white font-black text-2xl hover:text-yellow-300 transition"
          >
            🧸 TOY<span className="text-yellow-300">STORE</span>
          </Link>
          
          <nav className="flex gap-8 items-center max-sm:hidden">
            <Link 
              to="/" 
              className="navbar-link text-white hover:text-yellow-300 font-bold transition flex items-center gap-1"
            >
              🏠 Home
            </Link>
            <Link 
              to="/produtos" 
              className="navbar-link text-white hover:text-yellow-300 font-bold transition flex items-center gap-1"
            >
              🎁 Produtos
            </Link>
            <Link 
              to="/sobre" 
              className="navbar-link text-white hover:text-yellow-300 font-bold transition flex items-center gap-1"
            >
              ℹ️ Sobre
            </Link>
            <Link 
              to="/contato" 
              className="navbar-link text-white hover:text-yellow-300 font-bold transition flex items-center gap-1"
            >
              📞 Contato
            </Link>
            <Link 
              to="/carrinho" 
              className="navbar-cart bg-white text-purple-600 px-4 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-yellow-200 transition shadow-md relative"
            >
              🛒 Carrinho
              {cartCount > 0 && (
                <span className="cart-badge bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hidden max-sm:block text-white text-2xl font-bold hover:text-yellow-300 transition"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="hidden max-sm:flex flex-col gap-4 mt-4 pb-4 bg-gradient-to-b from-pink-300 to-purple-300 rounded-lg p-4">
            <Link 
              to="/" 
              className="text-white font-bold hover:text-yellow-300 block py-2 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              🏠 Home
            </Link>
            <Link 
              to="/produtos" 
              className="text-white font-bold hover:text-yellow-300 block py-2 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              🎁 Produtos
            </Link>
            <Link 
              to="/sobre" 
              className="text-white font-bold hover:text-yellow-300 block py-2 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ℹ️ Sobre
            </Link>
            <Link 
              to="/contato" 
              className="text-white font-bold hover:text-yellow-300 block py-2 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              📞 Contato
            </Link>
            <Link 
              to="/carrinho" 
              className="bg-white text-purple-600 px-4 py-2 rounded-lg font-bold flex items-center justify-center gap-2 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              🛒 Carrinho ({cartCount})
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}


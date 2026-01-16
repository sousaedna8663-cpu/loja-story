// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export function Navbar({ count }) {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-blue-600">TOYSTORE 2026</Link>
      <div className="bg-yellow-400 px-4 py-2 rounded-full font-bold">
        🛒 Carrinho: {count}
      </div>
    </nav>
  );
}

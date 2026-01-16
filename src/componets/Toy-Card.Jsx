export const ToyCard = ({ foguete })

import React from 'react';
import { Link } from 'react-router-dom';

export function ToyCard({ foguete }) {
  if (!foguete) return null;

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col h-full">
      <img 
        src={foguete.jpg} 
        alt={foguete} 
        className="w-full h-48 object-contain rounded-lg" 
      />
      
       <div className="mt-4 flex-grow">
          <h3 className="text-lg font-bold text-gray-800">{foguete.name}</h3>
          <p className="text-xl font-black text-blue-600 mt-2">R$ {foguete.price}</p>
      </div>


      <div className="flex flex-col gap-2 mt-4">
        {/* Link para a página de detalhes */}
        <Link 
          to={`/product/${product.id}`} 
          className="block text-center w-full bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 rounded-xl font-bold transition-colors"
        >
          Ver Detalhes
        </Link>
        
        <button 
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-2 rounded-xl font-bold transition-colors"
          onClick={() => alert('Adicionado ao carrinho!')}
        >
          Adicionar 🛒
        </button>
      </div>
    </div>
  );
}

import React from 'react';

export function ToyCard({ image, name, price, age }) {
  const formattedPrice = typeof price === 'number' 
    ? price.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : price;

  return (
    <div className="border rounded-2xl p-4 shadow-lg hover:scale-105 transition-transform bg-white flex flex-col justify-between h-full">
      <div>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-contain mb-4" 
          loading="lazy"
        />
        <span className="text-xs font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded-full">
          {age}+ anos
        </span>
        <h3 className="text-lg font-bold mt-2">{name}</h3>
      </div>
      
      <div className="mt-4">
        <p className="text-xl text-green-600 font-bold">R$ {formattedPrice}</p>
        <button 
          className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-xl font-bold transition-colors"
          onClick={() => alert(`✅ ${name} adicionado ao carrinho!`)}
        >
          Comprar
        </button>
      </div>
    </div>
  );
}

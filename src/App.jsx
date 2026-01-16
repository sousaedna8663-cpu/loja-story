import React from 'react';
import { useState } from 'react';

const BRINQUEDOS = [
  {
    id: 1,
    nome: "Foguete Espacial Deluxe",
    preco: "149,90",
    idade: "5+",
    cor: "border-blue-400",
    imagem: "/foguete.jpg", 
  },
  {
    id: 2,
    nome: "Ursinho de Pelúcia",
    preco: "79,00",
    idade: "0+",
    cor: "border-pink-400",
    imagem: "/urso.jpg",
  },
  {
    id: 3,
    nome: "Blocos de Construção",
    preco: "115,00",
    idade: "3+",
    cor: "border-yellow-400",
    imagem: "blocos.jpg"
  },
];


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
   
    if (!cartItems.find(item => item.id === product.id)) {
      setCartItems([...cartItems, product]);
    } else {
      alert("Este brinquedo já está no carrinho!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* HEADER */}
      <header className="text-center py-10">
        <h1 className="text-5xl font-black text-blue-500 drop-shadow-sm">
          TOY<span className="text-yellow-500">STORE</span>
        </h1>
        <p className="text-gray-500 font-medium">Diversão garantida em 2026!</p>
      </header>

      {/* CARRINHO DE COMPRAS */}
      <div className="max-w-6xl mx-auto mb-8 flex justify-end">
        <div className="bg-white p-3 rounded-2xl shadow-md flex items-center border-2 border-blue-100">
          <span className="text-gray-600 mr-3 font-bold">🛒 Carrinho:</span>
          <span className="bg-red-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full text-sm">
            {cartItems.length}
          </span>
        </div>
      </div>

      {/* GRID DE PRODUTOS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {BRINQUEDOS.map((toy) => (
          <div 
            key={toy.id} 
            className={`bg-white rounded-3xl p-5 shadow-lg border-b-8 ${toy.cor} hover:-translate-y-2 transition-all`}
          >
            <img 
              src={toy.imagem} 
              alt={toy.nome} 
              className="w-full h-48 object-cover rounded-2xl mb-4"
            />
            <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
              Idade: {toy.idade}
            </span>
            <h2 className="text-xl font-bold mt-2 text-gray-800">{toy.nome}</h2>
            <div className="flex justify-between items-center mt-5">
              <p className="text-2xl font-black text-green-600">R$ {toy.preco}</p>
              <button 
                onClick={() => addToCart(toy)}
                className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-xl shadow-md transition-all active:scale-90"
              >
                Adicionar 🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
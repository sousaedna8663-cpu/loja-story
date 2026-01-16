// src/pages/ProductDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft } from 'lucide-react'; 
import { products } from '../data/products'; // Certifique-se que este caminho está correto

export function ProductDetailPage() {
  const { id } = useParams(); 
  
  // Procura o produto na sua lista de dados pelo ID da URL
  const product = products.find((p) => p.id === id);

  // Caso o ID não exista ou o produto não seja encontrado
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Brinquedo não encontrado!</h2>
        <Link to="/" className="text-blue-500 underline">Voltar para a loja</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Link de Voltar */}
        <Link to="/" className="flex items-center text-blue-600 mb-6 hover:text-blue-800 transition">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Voltar para a loja
        </Link>

        {/* Container Principal */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="md:flex">
            
            {/* Coluna da Imagem */}
            <div className="md:w-1/2 p-8 bg-gray-50 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-h-[500px] object-contain w-full" 
              />
            </div>

            {/* Coluna dos Detalhes */}
            <div className="md:w-1/2 p-8">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                Categoria: Brinquedos
              </span>
              <h1 className="text-4xl font-extrabold mt-2 text-gray-800">
                {product.name}
              </h1>
              <p className="text-green-600 text-3xl font-bold mt-4">
                R$ {product.price}
              </p>
              
              {product.age && (
                <div className="mt-4 mb-6">
                  <span className="text-sm font-bold text-blue-500 bg-blue-100 px-3 py-1 rounded-full">
                    Idade: {product.age}
                  </span>
                </div>
              )}

              <p className="text-gray-600 mb-6 border-t pt-4">
                {product.description}
              </p>

              {/* Características (se existirem no seu objeto de produto) */}
              {product.details && (
                <>
                  <h4 className="font-semibold text-gray-700 mb-2">Características Principais:</h4>
                  <ul className="list-disc list-inside text-gray-600 mb-8">
                    {product.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Botão de Compra */}
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center">
                <ShoppingCart className="mr-3 h-6 w-6" />
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

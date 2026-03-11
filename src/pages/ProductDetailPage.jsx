import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products'; 

export function ProductDetailPage({ onAddToCart }) {
  const { id } = useParams(); 
  const product = PRODUCTS.find((p) => p.id === parseInt(id));
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Brinquedo não encontrado!</h2>
        <Link to="/produtos" className="text-blue-500 underline">Voltar para a loja</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Link to="/produtos" className="flex items-center text-blue-600 mb-6 hover:text-blue-800 transition">
          <span className="mr-2">←</span>
          Voltar para os produtos
        </Link>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 bg-gray-50 flex items-center justify-center">
              <img 
                src={product.imagem} 
                alt={product.nome} 
                className="max-h-[500px] object-contain w-full" 
              />
            </div>

            <div className="md:w-1/2 p-8">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                {product.categoria}
              </span>
              <h1 className="text-4xl font-extrabold mt-2 text-gray-800">
                {product.nome}
              </h1>
              <p className="text-green-600 text-3xl font-bold mt-4">
                R$ {product.precoFormatado}
              </p>
              
              {product.idade && (
                <div className="mt-4 mb-6">
                  <span className="text-sm font-bold text-blue-500 bg-blue-100 px-3 py-1 rounded-full">
                    Idade Recomendada: {product.idade}
                  </span>
                </div>
              )}

              <p className="text-gray-600 mb-6 border-t pt-4 text-lg leading-relaxed">
                {product.descricao}
              </p>

              {/* Características */}
              {product.detalhes && product.detalhes.length > 0 && (
                <>
                  <h4 className="font-semibold text-gray-700 mb-3 text-lg">Características Principais:</h4>
                  <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                    {product.detalhes.map((detalhe, index) => (
                      <li key={index}>{detalhe}</li>
                    ))}
                  </ul>
                </>
              )}

              {product.certificacoes && product.certificacoes.length > 0 && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-green-600">✔️</span>
                    Certificações e Conformidade
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.certificacoes.map((cert, index) => (
                      <span key={index} className="bg-green-200 text-green-800 text-sm px-3 py-2 rounded-full font-medium">
                        ✓ {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.garantia && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-blue-600">🏅</span>
                    Garantia do Produto
                  </h4>
                  <p className="text-gray-700">{product.garantia}</p>
                </div>
              )}

              {/* Botão de Compra */}
                <button 
                onClick={() => onAddToCart(product)}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center">
                <span className="mr-3">🛒</span>
                Adicionar ao Carrinho
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

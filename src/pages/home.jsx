import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';

export default function Home({ onAddToCart }) {
  // Mostrar os 6 primeiros produtos em destaque com promoção
  const featuredProducts = PRODUCTS.slice(0, 6);

  const renderAvaliacoes = (avaliacoes) => {
    const media = avaliacoes.reduce((sum, av) => sum + av.nota, 0) / avaliacoes.length;
    const estrelas = Math.round(media);
    return (
      <div className="flex items-center gap-2">
        <span>{'⭐'.repeat(estrelas)}</span>
        <span className="text-sm text-gray-600">({avaliacoes.length})</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-pink-50 to-blue-50">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 py-20 relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce" style={{ animationDuration: '3s' }}>🧸</div>
        <div className="absolute bottom-10 right-20 text-6xl opacity-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>🎁</div>
        <div className="absolute top-1/2 right-10 text-5xl opacity-20 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>🎈</div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl font-black mb-4 drop-shadow-lg animate-fade-in-up text-white">
            🧸 Bem-vindo à TOYSTORE
          </h1>
          <p className="text-2xl mb-8 drop-shadow-md animate-fade-in-up text-white font-bold" style={{ animationDelay: '0.1s' }}>
            Brinquedos educativos e seguros para crianças de 0 a 5 anos!
          </p>
          <p className="text-xl mb-10 drop-shadow-md animate-fade-in-up text-white" style={{ animationDelay: '0.2s' }}>
            Qualidade garantida, diversão sem fim e aprendizado contínuo
          </p>
          <Link 
            to="/produtos"
            className="inline-block bg-white text-purple-600 font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            🎁 Ver Catálogo Completo →
          </Link>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-black mb-12 text-center text-gray-800">
          💚 Por que escolher a TOYSTORE?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-400 hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in-up">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Qualidade Garantida</h3>
            <p className="text-gray-600">Todos os produtos passam por rigorosos testes de segurança com certificações internacionais.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-400 hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Entrega Rápida</h3>
            <p className="text-gray-600">Enviamos em até 7 dias úteis com rastreamento. Frete grátis para compras acima de R$ 100.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-400 hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-5xl mb-4">💳</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Segurança Total</h3>
            <p className="text-gray-600">Múltiplas formas de pagamento com encriptação SSL. 100% seguro e confiável.</p>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-black mb-4 text-center text-gray-800">
          ⭐ Produtos Mais Populares
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">Veja os brinquedos que as crianças mais amam!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* IMAGEM */}
              <div className="relative overflow-hidden bg-gradient-to-br from-pink-200 to-blue-200 h-56">
                <img 
                  src={product.imagem} 
                  alt={product.nome}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {product.promocao && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full font-bold animate-pulse">
                    -{product.desconto}%
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-pink-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                  {product.categoria}
                </div>
              </div>

              {/* CONTEÚDO */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 min-h-14">
                  {product.nome}
                </h3>

                {/* DESCRIÇÃO */}
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.descricao}
                </p>

                {/* AVALIACOES */}
                <div className="mb-3">
                  {renderAvaliacoes(product.avaliacoes)}
                </div>

                {/* DADOS */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-yellow-50 p-2 rounded-lg">
                    <p className="text-xs text-gray-600">Idade</p>
                    <p className="font-bold text-gray-800">{product.idade}</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <p className="text-xs text-gray-600">Tipo</p>
                    <p className="font-bold text-gray-800 text-sm">{product.tipo}</p>
                  </div>
                </div>

                {/* PREÇO */}
                <div className="mb-4">
                  {product.promocao ? (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 line-through">R$ {product.precoFormatado}</span>
                      <span className="text-2xl font-black text-green-600">
                        R$ {(product.preco * (1 - product.desconto / 100)).toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  ) : (
                    <span className="text-2xl font-black text-gray-800">R$ {product.precoFormatado}</span>
                  )}
                </div>

                <button 
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold py-3 rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all transform hover:scale-105 active:scale-95"
                >
                  🛒 Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* VER MAIS */}
        <div className="text-center mt-12">
          <Link 
            to="/produtos"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all"
          >
            Ver todos os {PRODUCTS.length} produtos →
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-black mb-12 text-center text-gray-800">
          💬 O que nossos clientes dizem
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-pink-400 hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in-up">
            <div className="text-4xl mb-3">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-600 mb-4 italic">"Excelente qualidade, entrega rápida e atendimento maravilhoso! Minha filha adorou os brinquedos!"</p>
            <p className="font-bold text-gray-800">👩 Maria Silva</p>
            <p className="text-sm text-gray-500">Mãe de Sofia, 2 anos</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-purple-400 hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl mb-3">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-600 mb-4 italic">"Os brinquedos são educativos e super seguros. Recomendo para todos os pais!"</p>
            <p className="font-bold text-gray-800">👨 João Costa</p>
            <p className="text-sm text-gray-500">Pai de Lucas, 3 anos</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-400 hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl mb-3">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-600 mb-4 italic">"Voltei a comprar várias vezes. A qualidade é consistente e os preços são justos!"</p>
            <p className="font-bold text-gray-800">👩 Fernanda Oliveira</p>
            <p className="text-sm text-gray-500">Mãe de Isabela, 1 ano</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 text-white p-12 rounded-2xl shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-5 right-10 text-5xl opacity-20">🎊</div>
          <div className="absolute bottom-5 left-10 text-5xl opacity-20">🎉</div>
          
          <h2 className="text-4xl font-black mb-4 relative z-10">🎊 Pronto para começar?</h2>
          <p className="text-xl mb-8 relative z-10">Encontre o brinquedo perfeito para sua criança e veja a alegria nos seus olhos!</p>
          <Link 
            to="/produtos"
            className="inline-block bg-white text-orange-500 font-black py-4 px-10 rounded-full text-lg hover:bg-yellow-100 transition-all transform hover:scale-110 shadow-lg relative z-10"
          >
            Explorar Catálogo Agora 🎁
          </Link>
        </div>
      </section>
    </div>
  );
}

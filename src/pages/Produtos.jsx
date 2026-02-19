import { useState } from 'react';
import { PRODUCTS } from '../data/products';

export default function Produtos({ onAddToCart }) {
  const [filtroIdade, setFiltroIdade] = useState('Todos');
  const [filtroTipo, setFiltroTipo] = useState('Todos');
  const [filtroPreco, setFiltroPreco] = useState(500);
  const [busca, setBusca] = useState('');
  const [ordenacao, setOrdenacao] = useState('popularidade');

  // Obter filtros únicos
  const idades = ['Todos', ...new Set(PRODUCTS.map(p => p.idade))];
  const tipos = ['Todos', ...new Set(PRODUCTS.map(p => p.tipo))];

  // Filtrar e ordernar produtos
  let produtosFiltrados = PRODUCTS.filter(product => {
    const matchIdade = filtroIdade === 'Todos' || product.idade === filtroIdade;
    const matchTipo = filtroTipo === 'Todos' || product.tipo === filtroTipo;
    const matchPreco = product.preco <= filtroPreco;
    const matchBusca = product.nome.toLowerCase().includes(busca.toLowerCase());
    return matchIdade && matchTipo && matchPreco && matchBusca;
  });

  // Aplicar ordenação
  if (ordenacao === 'menor_preco') {
    produtosFiltrados.sort((a, b) => a.preco - b.preco);
  } else if (ordenacao === 'maior_preco') {
    produtosFiltrados.sort((a, b) => b.preco - a.preco);
  } else if (ordenacao === 'alfabetico') {
    produtosFiltrados.sort((a, b) => a.nome.localeCompare(b.nome));
  } else if (ordenacao === 'avaliacao') {
    produtosFiltrados.sort((a, b) => {
      const avgA = a.avaliacoes.reduce((sum, av) => sum + av.nota, 0) / a.avaliacoes.length;
      const avgB = b.avaliacoes.reduce((sum, av) => sum + av.nota, 0) / b.avaliacoes.length;
      return avgB - avgA;
    });
  }

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
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-black mb-2 text-white drop-shadow-lg">🎁 Nossos Produtos</h1>
          <p className="text-xl text-white drop-shadow-md">Encontre o brinquedo perfeito para sua criança com qualidade garantida!</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* FILTROS */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-pink-400">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">🔍 Filtrar e Buscar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* BUSCA */}
            <div className="animate-fade-in-up">
              <label className="block text-sm font-bold text-gray-700 mb-3">
                🔎 Buscar Produto
              </label>
              <input 
                type="text"
                placeholder="Nome do brinquedo..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition"
              />
            </div>

            {/* IDADE */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
              <label className="block text-sm font-bold text-gray-700 mb-3">👶 Idade</label>
              <select 
                value={filtroIdade}
                onChange={(e) => setFiltroIdade(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              >
                {idades.map(idade => (
                  <option key={idade} value={idade}>{idade}</option>
                ))}
              </select>
            </div>

            {/* TIPO */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <label className="block text-sm font-bold text-gray-700 mb-3">📦 Tipo</label>
              <select 
                value={filtroTipo}
                onChange={(e) => setFiltroTipo(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
              >
                {tipos.map(tipo => (
                  <option key={tipo} value={tipo}>{tipo}</option>
                ))}
              </select>
            </div>

            {/* PREÇO */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              <label className="block text-sm font-bold text-gray-700 mb-3">
                💰 Preço até R$ {filtroPreco}
              </label>
              <input 
                type="range"
                min="0"
                max="500"
                step="10"
                value={filtroPreco}
                onChange={(e) => setFiltroPreco(Number(e.target.value))}
                className="w-full h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          {/* ORDENAÇÃO */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1">
              <label className="block text-sm font-bold text-gray-700 mb-3">📊 Ordenar por</label>
              <select 
                value={ordenacao}
                onChange={(e) => setOrdenacao(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
              >
                <option value="popularidade">Mais Popular</option>
                <option value="menor_preco">Menor Preço</option>
                <option value="maior_preco">Maior Preço</option>
                <option value="alfabetico">A - Z</option>
                <option value="avaliacao">Melhor Avaliação</option>
              </select>
            </div>
            <div className="text-sm text-gray-600 mt-8">
              {produtosFiltrados.length} produto(s)
            </div>
          </div>
        </div>

        {/* GRID DE PRODUTOS */}
        {produtosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtosFiltrados.map((product, index) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* IMAGEM E BADGES */}
                <div className="relative overflow-hidden bg-gradient-to-br from-pink-200 to-blue-200 h-64">
                  <img 
                    src={product.imagem} 
                    alt={product.nome}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                    <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {product.categoria}
                    </span>
                    {product.promocao && (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                        -{product.desconto}%
                      </span>
                    )}
                  </div>
                  <span className="absolute top-3 right-3 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-xs font-bold">
                    {product.idade}
                  </span>
                </div>

                {/* CONTEÚDO */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 min-h-14">
                    {product.nome}
                  </h3>

                  {/* DESCRIÇÃO */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {product.descricao}
                  </p>

                  {/* AVALIACOES */}
                  <div className="mb-4">
                    {renderAvaliacoes(product.avaliacoes)}
                  </div>

                  {/* PREÇO */}
                  <div className="mb-4 flex items-baseline gap-2">
                    {product.promocao ? (
                      <>
                        <span className="text-sm text-gray-500 line-through">R$ {product.precoFormatado}</span>
                        <span className="text-2xl font-black text-green-600">
                          R$ {(product.preco * (1 - product.desconto / 100)).toFixed(2).replace('.', ',')}
                        </span>
                      </>
                    ) : (
                      <span className="text-2xl font-black text-gray-800">R$ {product.precoFormatado}</span>
                    )}
                  </div>

                  {/* TIPO */}
                  <p className="text-xs text-gray-500 mb-4 font-semibold">
                    Tipo: <span className="text-gray-700">{product.tipo}</span>
                  </p>

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
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Nenhum produto encontrado</h2>
            <p className="text-gray-600 mb-6">Tente ajustar seus filtros para encontrar o que procura</p>
            <button 
              onClick={() => {
                setBusca('');
                setFiltroIdade('Todos');
                setFiltroTipo('Todos');
                setFiltroPreco(500);
              }}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              🔄 Limpar Filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

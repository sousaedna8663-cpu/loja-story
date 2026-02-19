import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Carrinho({ cartItems, onUpdateQuantity, onRemoveFromCart, onClearCart }) {
  const [etapa, setEtapa] = useState('carrinho'); // carrinho, checkout, pagamento, confirmacao
  const [metodoPagamento, setMetodoPagamento] = useState('credito');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nomeCliente, setNomeCliente] = useState('');
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantidade, 0);
  const frete = total > 100 ? 0 : 15;
  const totalComFrete = total + frete;

  const handleFinalizarCompra = () => {
    if (nomeCliente.trim() && endereco.trim() && telefone.trim()) {
      setEtapa('pagamento');
    } else {
      alert('Preencha todos os campos obrigatórios!');
    }
  };

  const handleConfirmarPagamento = () => {
    setEtapa('confirmacao');
    setTimeout(() => {
      onClearCart();
      navigate('/');
    }, 3000);
  };

  if (etapa === 'confirmacao') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="text-8xl mb-4 animate-bounce">✅</div>
          <h1 className="text-4xl font-black text-green-600 mb-4">Compra Realizada com Sucesso!</h1>
          <p className="text-lg text-gray-700 mb-6">Seus brinquedos estão a caminho! 🚚</p>
          <p className="text-gray-600 mb-8">Você será redirecionado em breve...</p>
          <Link to="/" className="btn-primary inline-block">
            Voltar ao Início
          </Link>
        </div>
      </div>
    );
  }

  if (etapa === 'pagamento') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
        <section className="bg-gradient-to-r from-purple-500 to-pink-500 py-12">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-black text-white">💳 Pagamento Seguro</h1>
            <p className="text-white text-lg">Escolha a forma de pagamento que melhor se adequa a você</p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* MÉTODOS DE PAGAMENTO */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-8 text-gray-800">🏦 Formas de Pagamento</h2>
                
                <div className="space-y-4">
                  {/* CARTÃO DE CRÉDITO */}
                  <label className="payment-option">
                    <input
                      type="radio"
                      value="credito"
                      checked={metodoPagamento === 'credito'}
                      onChange={(e) => setMetodoPagamento(e.target.value)}
                    />
                    <div className="payment-content">
                      <div className="payment-header">
                        <span className="text-2xl">💳</span>
                        <span className="font-bold text-gray-800">Cartão de Crédito</span>
                      </div>
                      <span className="text-sm text-gray-600">Parcelado em até 12x</span>
                    </div>
                  </label>

                  {/* DÉBITO */}
                  <label className="payment-option">
                    <input
                      type="radio"
                      value="debito"
                      checked={metodoPagamento === 'debito'}
                      onChange={(e) => setMetodoPagamento(e.target.value)}
                    />
                    <div className="payment-content">
                      <div className="payment-header">
                        <span className="text-2xl">🏧</span>
                        <span className="font-bold text-gray-800">Cartão de Débito</span>
                      </div>
                      <span className="text-sm text-gray-600">Desconto à vista</span>
                    </div>
                  </label>

                  {/* PIX */}
                  <label className="payment-option">
                    <input
                      type="radio"
                      value="pix"
                      checked={metodoPagamento === 'pix'}
                      onChange={(e) => setMetodoPagamento(e.target.value)}
                    />
                    <div className="payment-content">
                      <div className="payment-header">
                        <span className="text-2xl">📱</span>
                        <span className="font-bold text-gray-800">Pix</span>
                      </div>
                      <span className="text-sm text-gray-600">Também à vista, instantâneo</span>
                    </div>
                  </label>

                  {/* BOLETO */}
                  <label className="payment-option">
                    <input
                      type="radio"
                      value="boleto"
                      checked={metodoPagamento === 'boleto'}
                      onChange={(e) => setMetodoPagamento(e.target.value)}
                    />
                    <div className="payment-content">
                      <div className="payment-header">
                        <span className="text-2xl">📄</span>
                        <span className="font-bold text-gray-800">Boleto Bancário</span>
                      </div>
                      <span className="text-sm text-gray-600">Vence em 3 dias úteis</span>
                    </div>
                  </label>

                  {/* PAYPAL */}
                  <label className="payment-option">
                    <input
                      type="radio"
                      value="paypal"
                      checked={metodoPagamento === 'paypal'}
                      onChange={(e) => setMetodoPagamento(e.target.value)}
                    />
                    <div className="payment-content">
                      <div className="payment-header">
                        <span className="text-2xl">🌐</span>
                        <span className="font-bold text-gray-800">PayPal</span>
                      </div>
                      <span className="text-sm text-gray-600">Seguro e confiável</span>
                    </div>
                  </label>
                </div>

                {/* CERTIFICADO DE SEGURANÇA */}
                <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-green-800">
                    <span className="font-bold">🔒 Segurança Garantida</span><br/>
                    Todos os pagamentos são encriptados e processados com total segurança usando SSL 256-bit.
                  </p>
                </div>
              </div>
            </div>

            {/* RESUMO DO PEDIDO */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-6">📋 Resumo</h3>
                
                <div className="space-y-3 mb-6 pb-6 border-b-2 border-gray-200">
                  <p className="flex justify-between text-gray-700">
                    <span>Subtotal:</span>
                    <span className="font-bold">R$ {total.toFixed(2).replace('.', ',')}</span>
                  </p>
                  <p className="flex justify-between text-gray-700">
                    <span>Frete:</span>
                    <span className="font-bold text-green-600">
                      {frete === 0 ? 'Grátis! 🎉' : `R$ ${frete.toFixed(2).replace('.', ',')}`}
                    </span>
                  </p>
                </div>

                <div className="text-center mb-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">TOTAL A PAGAR</p>
                  <p className="text-3xl font-black text-blue-600">
                    R$ {totalComFrete.toFixed(2).replace('.', ',')}
                  </p>
                </div>

                <button
                  onClick={handleConfirmarPagamento}
                  className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 rounded-lg hover:from-green-500 hover:to-blue-600 transition-all mb-3"
                >
                  ✓ Confirmar Pagamento
                </button>

                <button
                  onClick={() => setEtapa('checkout')}
                  className="w-full bg-gray-200 text-gray-800 font-bold py-3 rounded-lg hover:bg-gray-300 transition"
                >
                  ← Voltar
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (etapa === 'checkout') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
        <section className="bg-gradient-to-r from-orange-400 to-yellow-400 py-12">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-black text-white">📦 Dados de Entrega</h1>
            <p className="text-white text-lg">Preencha seus dados para recebermos seu pedido</p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* FORMULÁRIO */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-8 text-gray-800">📍 Informações de Entrega</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      👤 Nome Completo *
                    </label>
                    <input
                      type="text"
                      value={nomeCliente}
                      onChange={(e) => setNomeCliente(e.target.value)}
                      placeholder="Ex: João Silva Santos"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      📞 Telefone *
                    </label>
                    <input
                      type="tel"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value.replace(/\D/g, '').slice(0, 11))}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      🏠 Endereço Completo *
                    </label>
                    <textarea
                      value={endereco}
                      onChange={(e) => setEndereco(e.target.value)}
                      placeholder="Rua, número, complemento, bairro, cidade, CEP..."
                      rows="4"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition resize-none"
                    />
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-sm text-yellow-800">
                      <span className="font-bold">⏱️ Tempo de Entrega</span><br/>
                      {frete === 0 ? '5-7 dias úteis (Frete Grátis)' : '3-5 dias úteis (Frete Pago)'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RESUMO */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-6">🛒 Resumo</h3>
                
                <div className="space-y-2 mb-6 pb-6 border-b-2 border-gray-200">
                  <p className="text-gray-600 text-sm">
                    <span className="font-bold text-gray-800">{cartItems.length}</span> produto(s)
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-bold text-gray-800">{totalItems}</span> unidade(s)
                  </p>
                </div>

                <div className="text-center mb-6 p-3 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">TOTAL</p>
                  <p className="text-2xl font-black text-orange-600">
                    R$ {total.toFixed(2).replace('.', ',')}
                  </p>
                </div>

                <button
                  onClick={handleFinalizarCompra}
                  className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold py-3 rounded-lg hover:from-orange-500 hover:to-yellow-500 transition-all mb-3"
                >
                  → Ir para Pagamento
                </button>

                <button
                  onClick={() => setEtapa('carrinho')}
                  className="w-full bg-gray-200 text-gray-800 font-bold py-3 rounded-lg hover:bg-gray-300 transition"
                >
                  ← Voltar ao Carrinho
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // CARRINHO
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-blue-50">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-pink-400 via-red-400 to-red-500 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-black mb-2 text-white drop-shadow-lg">🛒 Seu Carrinho</h1>
          <p className="text-white text-lg drop-shadow-md">Revise seus produtos antes de finalizar</p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        {cartItems.length === 0 ? (
          /* CARRINHO VAZIO */
          <div className="text-center py-16">
            <div className="text-8xl mb-4">🛒</div>
            <h2 className="text-4xl font-black text-gray-800 mb-4">Carrinho Vazio</h2>
            <p className="text-xl text-gray-600 mb-8">Que tal adicionar alguns brinquedos incríveis para suas crianças?</p>
            <Link 
              to="/produtos"
              className="bg-gradient-to-r from-pink-400 to-red-400 text-white font-bold py-4 px-8 rounded-lg inline-block hover:from-pink-500 hover:to-red-500 transition-all text-lg"
            >
              🎁 Ver Produtos
            </Link>
          </div>
        ) : (
          /* CARRINHO COM PRODUTOS */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LISTA DE PRODUTOS */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {cartItems.map((item, index) => (
                  <div 
                    key={item.id}
                    className="flex gap-4 p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* IMAGEM */}
                    <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-pink-200 to-blue-200">
                      <img 
                        src={item.imagem}
                        alt={item.nome}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* DETALHES */}
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg mb-2">{item.nome}</h3>
                      <p className="text-sm text-gray-600 mb-3">{item.descricao}</p>
                      <p className="text-sm text-gray-500 mb-2">Faixa etária: <span className="font-bold text-gray-700">{item.idade}</span></p>
                    </div>

                    {/* CONTROLES */}
                    <div className="text-right flex flex-col justify-between">
                      <button 
                        onClick={() => onRemoveFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 font-bold text-xl w-8 h-8 flex items-center justify-center hover:bg-red-50 rounded transition"
                        title="Remover"
                      >
                        ✕
                      </button>

                      <div className="flex flex-col items-end gap-3">
                        {/* CONTROLE DE QUANTIDADE */}
                        <div className="flex items-center border-2 border-gray-300 rounded-lg h-10">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, item.quantidade - 1)}
                            className="px-3 py-1 hover:bg-gray-100 font-bold transition"
                          >
                            −
                          </button>
                          <span className="w-8 text-center font-bold border-l border-r border-gray-300">
                            {item.quantidade}
                          </span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, item.quantidade + 1)}
                            className="px-3 py-1 hover:bg-gray-100 font-bold transition"
                          >
                            +
                          </button>
                        </div>

                        {/* PREÇO */}
                        <div className="text-right">
                          <p className="text-xs text-gray-500 mb-1">R$ {item.precoFormatado}</p>
                          <p className="text-lg font-black text-green-600">
                            R$ {(item.preco * item.quantidade).toFixed(2).replace('.', ',')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CONTINUAR COMPRANDO */}
              <div className="mt-6">
                <Link 
                  to="/produtos"
                  className="text-blue-600 hover:text-blue-800 font-bold text-lg transition flex items-center gap-2"
                >
                  ← Continuar Comprando
                </Link>
              </div>
            </div>

            {/* RESUMO DO PEDIDO */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h2 className="text-2xl font-black text-gray-800 mb-6">📋 Resumo</h2>

                <div className="space-y-3 mb-6 pb-6 border-b-2 border-gray-200">
                  <p className="flex justify-between text-gray-700">
                    <span>Produtos:</span>
                    <span className="font-bold">{cartItems.length}</span>
                  </p>
                  <p className="flex justify-between text-gray-700">
                    <span>Quantidade:</span>
                    <span className="font-bold">{totalItems} un.</span>
                  </p>
                </div>

                <div className="space-y-2 mb-6 pb-6 border-b-2 border-gray-200">
                  <div className="flex justify-between text-gray-700">
                    <span className="font-semibold">Subtotal:</span>
                    <span className="font-bold">R$ {total.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <div className="flex justify-between text-green-600 font-semibold">
                    <span>Frete:</span>
                    <span className="bg-green-100 px-2 py-1 rounded text-sm">
                      {frete === 0 ? 'Grátis! 🎉' : `R$ ${frete.toFixed(2).replace('.', ',')}`}
                    </span>
                  </div>
                </div>

                <div className="text-center mb-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">TOTAL A PAGAR</p>
                  <p className="text-4xl font-black text-blue-600">
                    R$ {totalComFrete.toFixed(2).replace('.', ',')}
                  </p>
                </div>

                <button 
                  onClick={() => setEtapa('checkout')}
                  className="w-full bg-gradient-to-r from-pink-400 to-red-400 text-white font-bold py-3 rounded-lg hover:from-pink-500 hover:to-red-500 transition-all mb-3 text-lg"
                >
                  → Finalizar Compra
                </button>

                <button 
                  onClick={onClearCart}
                  className="w-full bg-red-100 hover:bg-red-200 text-red-700 py-3 rounded-lg font-bold transition"
                >
                  🗑️ Limpar Carrinho
                </button>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg text-sm text-yellow-800 border border-yellow-200">
                  <p className="font-semibold mb-1">💡 Dica!</p>
                  <p>
                    {frete === 0 
                      ? 'Parabéns! Seu frete é grátis!' 
                      : `Adicione R$ ${(100 - total).toFixed(2).replace('.', ',')} para ter frete grátis!`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

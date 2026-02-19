import { useState } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
    tipo: 'duvida'
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nome && formData.email && formData.mensagem) {
      setEnviado(true);
      setTimeout(() => {
        setEnviado(false);
        setFormData({ nome: '', email: '', assunto: '', mensagem: '', tipo: 'duvida' });
      }, 3000);
    } else {
      alert('Preencha todos os campos obrigatórios!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-black mb-4 text-white drop-shadow-lg">📞 Entre em Contato</h1>
          <p className="text-xl text-white drop-shadow-md">Estamos aqui para ajudar você com qualquer dúvida ou sugestão!</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* CANAIS DE CONTATO */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in-up">
            <div className="text-5xl mb-4">📧</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Email</h3>
            <p className="text-gray-600 mb-4">contato@toysstore.com.br</p>
            <p className="text-sm text-gray-500">Resposta em até 24 horas</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">WhatsApp</h3>
            <p className="text-gray-600 mb-4">(11) 99999-9999</p>
            <p className="text-sm text-gray-500">Seg-Sex: 9h às 18h</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Chat ao Vivo</h3>
            <p className="text-gray-600 mb-4">Disponível agora</p>
            <p className="text-sm text-gray-500">Seg-Sab: 10h às 20h</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FORMULÁRIO */}
          <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in-up">
            <h2 className="text-3xl font-black text-gray-800 mb-6">📝 Envie sua Mensagem</h2>
            
            {enviado && (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded">
                <p className="font-bold">✅ Mensagem enviada com sucesso!</p>
                <p>Em breve você receberá uma resposta em seu email.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  👤 Nome Completo *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  📧 Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  🏷️ Tipo de Contato *
                </label>
                <select
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition"
                >
                  <option value="duvida">Dúvida</option>
                  <option value="reclamacao">Reclamação</option>
                  <option value="sugestao">Sugestão</option>
                  <option value="pedido">Pergunta sobre Pedido</option>
                  <option value="troca">Devolução/Troca</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  📌 Assunto
                </label>
                <input
                  type="text"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  placeholder="Assunto da sua mensagem"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  💬 Mensagem *
                </label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Conte-nos mais sobre sua mensagem..."
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-3 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all text-lg"
              >
                ✉️ Enviar Mensagem
              </button>
            </form>
          </div>

          {/* FAQ RÁPIDO */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-3xl font-black text-gray-800 mb-6">❓ Perguntas Frequentes</h2>
            
            <div className="space-y-4">
              <details className="bg-white rounded-lg p-6 cursor-pointer hover:shadow-lg transition">
                <summary className="font-bold text-lg text-gray-800 flex items-center gap-2">
                  <span className="text-2xl">📦</span> Qual é o tempo de entrega?
                </summary>
                <p className="text-gray-600 mt-4">
                  Nosros prazos são: 3-5 dias úteis para frete pago e 5-7 dias úteis para frete grátis. 
                  Rastreamento disponível após o envio!
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 cursor-pointer hover:shadow-lg transition">
                <summary className="font-bold text-lg text-gray-800 flex items-center gap-2">
                  <span className="text-2xl">💳</span> Quais são as formas de pagamento?
                </summary>
                <p className="text-gray-600 mt-4">
                  Aceitamos: Cartão de Crédito (até 12x), Débito, Pix, Boleto e PayPal. 
                  Todos os pagamentos são 100% seguros e encriptados.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 cursor-pointer hover:shadow-lg transition">
                <summary className="font-bold text-lg text-gray-800 flex items-center gap-2">
                  <span className="text-2xl">🔄</span> Há garantia nos produtos?
                </summary>
                <p className="text-gray-600 mt-4">
                  Sim! Todos os produtos possuem 30 dias de garantia. Se houver algum dano em fábrica, 
                  você pode devolver sem custos.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 cursor-pointer hover:shadow-lg transition">
                <summary className="font-bold text-lg text-gray-800 flex items-center gap-2">
                  <span className="text-2xl">🚚</span> Como funciona a devolução?
                </summary>
                <p className="text-gray-600 mt-4">
                  Você tem 30 dias para devolver um produto. Entre em contato conosco pelo WhatsApp 
                  ou email e ajudaremos com toda o processo!
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 cursor-pointer hover:shadow-lg transition">
                <summary className="font-bold text-lg text-gray-800 flex items-center gap-2">
                  <span className="text-2xl">👶</span> Os produtos são seguros para meu bebê?
                </summary>
                <p className="text-gray-600 mt-4">
                  Absolutamente! Todos os nossos produtos possuem certificações internacionais de segurança. 
                  São livres de BPA, ftalatos e outras substâncias prejudiciais.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 cursor-pointer hover:shadow-lg transition">
                <summary className="font-bold text-lg text-gray-800 flex items-center gap-2">
                  <span className="text-2xl">🎁</span> Podem embrulhar para presente?
                </summary>
                <p className="text-gray-600 mt-4">
                  Sim! Oferecemos embrulho especial para presentes. 
                  Solicite na página de checkout ou entre em contato conosco!
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

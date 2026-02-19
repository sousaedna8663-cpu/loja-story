import { Link } from 'react-router-dom';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-black mb-4 text-white drop-shadow-lg">🎯 Sobre a ToysStore</h1>
          <p className="text-xl text-white drop-shadow-md">Dedicados a trazer alegria e aprendizado para as crianças</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* NOSSA HISTÓRIA */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-black text-gray-800 mb-6 flex items-center gap-3">
            📖 Nossa História
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A ToysStore nasceu com uma missão simples: trazer alegria, segurança e educação para crianças de 0 a 5 anos através de brinquedos de qualidade. 
            Fundada em 2024, acreditamos que cada criança merece brinquedos que desenvolvam suas habilidades mientras se divertem!
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Selecionamos cuidadosamente cada produto para garantir segurança, qualidade e valor educativo. Nosso objetivo é servir 
            como parceiros confiáveis das famílias na jornada de desenvolvimento infantil.
          </p>
        </div>

        {/* VALORES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in-up">
            <div className="text-6xl mb-4">💚</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Qualidade</h3>
            <p className="text-gray-600">Todos os nossos produtos passam por rigorosos testes de segurança e qualidade internacional.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-6xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Educação</h3>
            <p className="text-gray-600">Focamos em brinquedos que estimulam desenvolvimento motor, cognitivo e social das crianças.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-6xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Confiança</h3>
            <p className="text-gray-600">Oferecemos suporte excepcional e garantia satisfação para cada cliente. Sua confiança é nosso maior prêmio!</p>
          </div>
        </div>

        {/* SEGURANÇA */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border-l-4 border-green-500 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl font-black text-gray-800 mb-6 flex items-center gap-3">
            🔒 Segurança e Certificações
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Certificações Internacionais</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span><strong>CE</strong> - Conformidade com normas europeias</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span><strong>INMETRO</strong> - Certificação brasileira de segurança</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span><strong>ASTM</strong> - Padrões americanos de segurança</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span><strong>Não-tóxico</strong> - Livres de BPA e ftalatos</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Nossas Garantias</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-2xl">🎁</span>
                  <span>30 dias de garantia em todos os produtos</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">🔄</span>
                  <span>Devolução fácil sem complicações</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">📞</span>
                  <span>Suporte ao cliente 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">💳</span>
                  <span>Pagamento 100% seguro e encriptado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* EQUIPE */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-black text-gray-800 mb-6 flex items-center gap-3">
            👥 Nossa Equipe
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Somos um time apaixonado por crianças e brinquedos educativos. Cada membro da nossa equipe trabalha com dedicação 
            para garantir que você encontre exatamente o que seu filho precisa para crescer feliz e seguro.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-b from-pink-100 to-white rounded-lg">
              <div className="text-5xl mb-3">👨‍💼</div>
              <h3 className="font-bold text-lg mb-2">Especialista em Segurança</h3>
              <p className="text-sm text-gray-600">Garante que todos os produtos atendem aos maiores padrões de segurança</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-blue-100 to-white rounded-lg">
              <div className="text-5xl mb-3">👨‍🎓</div>
              <h3 className="font-bold text-lg mb-2">Especialista em Educação</h3>
              <p className="text-sm text-gray-600">Seleciona brinquedos que estimulam aprendizado e desenvolvimento</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-green-100 to-white rounded-lg">
              <div className="text-5xl mb-3">👨‍💼</div>
              <h3 className="font-bold text-lg mb-2">Customer Experience</h3>
              <p className="text-sm text-gray-600">Sempre pronto para ajudar com questões e sugestões</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-gray-800 mb-6">Quer conhecer nossos brinquedos?</h2>
          <Link 
            to="/produtos"
            className="bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold py-4 px-10 rounded-lg inline-block hover:from-pink-500 hover:to-purple-600 transition-all text-xl"
          >
            🎁 Ver Nossos Produtos
          </Link>
        </div>
      </section>
    </div>
  );
}

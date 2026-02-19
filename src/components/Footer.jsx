import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white mt-16 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* SOBRE */}
          <div>
            <h3 className="text-xl font-black mb-4">🧸 ToysStore</h3>
            <p className="text-sm">Brinquedos educativos e seguros para crianças de 0 a 5 anos com qualidade garantida.</p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-bold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-yellow-300 transition">Home</Link></li>
              <li><Link to="/produtos" className="hover:text-yellow-300 transition">Produtos</Link></li>
              <li><Link to="/sobre" className="hover:text-yellow-300 transition">Sobre Nós</Link></li>
              <li><Link to="/contato" className="hover:text-yellow-300 transition">Contato</Link></li>
            </ul>
          </div>

          {/* ATENDIMENTO */}
          <div>
            <h4 className="font-bold mb-4">📞 Atendimento</h4>
            <ul className="space-y-2 text-sm">
              <li>📧 contato@toysstore.com.br</li>
              <li>📱 (88)99999-9999</li>
              <li>💬 Chat 24/7</li>
              <li>🕐 Seg-Sab: 9h às 20h</li>
            </ul>
          </div>

          {/* REDES SOCIAIS */}
          <div>
            <h4 className="font-bold mb-4">Siga-nos</h4>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-yellow-300 transition">📘</a>
              <a href="#" className="hover:text-yellow-300 transition">📷</a>
              <a href="#" className="hover:text-yellow-300 transition">🐦</a>
              <a href="#" className="hover:text-yellow-300 transition">▶️</a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white border-opacity-30 pt-8">
          {/* PAGAMENTO E SEGURANÇA */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm mb-6">
            <div>
              <p className="font-bold mb-2">💳 Formas de Pagamento</p>
              <div className="flex gap-4">
                <span>💳 Crédito</span>
                <span>🏧 Débito</span>
                <span>📱 Pix</span>
                <span>📄 Boleto</span>
              </div>
            </div>
            <div>
              <p className="font-bold mb-2">🔒 Segurança</p>
              <p>SSL 256-bit | Certificado Seguro</p>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="text-center text-sm text-white text-opacity-80">
            <p>&copy; {currentYear}Trabalho de conclusão do curso desenvolvedor web full stack</p>
            <p className="mt-2">
              <Link to="#" className="hover:text-yellow-300 transition">Política de Privacidade</Link> • 
              <Link to="#" className="hover:text-yellow-300 transition"> Termos de Uso</Link> • 
              <Link to="#" className="hover:text-yellow-300 transition"> Cookie</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

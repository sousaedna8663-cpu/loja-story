# 🧸 ToysStore - Loja de Brinquedos Educativos

Uma plataforma moderna de e-commerce para brinquedos educativos e seguros para crianças de 0 a 5 anos. Desenvolvida com React, Vite, Tailwind CSS e React Router.

## ✨ Características

### 🎯 Para Clientes
- **Catálogo Completo**: 8+ brinquedos educativos e seguros
- **Filtros Avançados**: Filtrar por idade, tipo de brinquedo e preço
- **Sistema de Avaliações**: Veja comentários de outros clientes
- **Carrinho de Compras**: Adicione e gerencie produtos facilmente
- **Checkout Seguro**: 4 etapas (Carrinho → Dados → Pagamento → Confirmação)
- **Múltiplas Formas de Pagamento**: Crédito, Débito, Pix, Boleto, PayPal
- **Frete Grátis**: Para compras acima de R$ 100
- **Design Responsivo**: Funciona em desktop, tablet e mobile

### 📱 Páginas Principais
1. **Home** - Produtos em destaque e benefícios da loja
2. **Produtos** - Catálogo completo com filtros
3. **Carrinho** - Gerenciamento de itens
4. **Sobre Nós** - História, valores e certificações
5. **Contato** - Formulário de contato e FAQ

### 🎨 Design
- **Cores Vibrantes**: Rosa, roxo, azul e amarelo alegres
- **Fontes Amigáveis**: Fredoka e Comic Neue para apelo infantil
- **Animações Suaves**: Transições e efeitos de hover
- **Emojis**: Ícones descontraídos para melhor comunicação

## 🚀 Como Começar

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Instalação

1. **Clone ou acesse o repositório:**
```bash
cd c:\Users\Mazé\OneDrive\Desktop\digita-story
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Abra no navegador:**
```
http://localhost:5173
```

## 📦 Scripts Disponíveis

```bash
npm run dev       # Inicia servidor de desenvolvimento Vite
npm run build     # Cria build para produção
npm run preview   # Visualiza build de produção localmente
npm start         # Alias para npm run dev
npm run server    # Inicia o servidor Express (separado)
```

## 🏗️ Estrutura do Projeto

```
loja-story/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navegação principal
│   │   ├── Footer.jsx          # Rodapé
│   │   ├── cardproducts.jsx    # Card de produto (legado)
│   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx            # Página inicial
│   │   ├── Produtos.jsx        # Catálogo com filtros
│   │   ├── Carrinho.jsx        # Carrinho e checkout
│   │   ├── Sobre.jsx           # Sobre a loja
│   │   └── Contato.jsx         # Contato e FAQ
│   ├── data/
│   │   └── products.js         # Dados dos produtos
│   ├── App.js                  # Componente principal com rotas
│   ├── App.css                 # Estilos customizados
│   ├── index.css               # Importa Tailwind
│   └── main.jsx                # Entrada da aplicação
├── public/
│   ├── index.html              # Legado (não usado)
│   └── ...
├── index.html                   # Entrada Vite
├── vite.config.js              # Configuração Vite
├── tailwind.config.js          # Configuração Tailwind
├── postcss.config.js           # Configuração PostCSS
├── package.json                # Dependências e scripts
└── README.md                   # Este arquivo
```

## 🎁 Produtos Disponíveis

A loja oferece uma variedade curada de brinquedos para cada faixa etária:

- **0-1 anos**: Chocalhos, bolas sensor
iais
- **1-2 anos**: Esteiras de atividades, blocos macios
- **2-3 anos**: Livros de pano, brinquedos de encaixe
- **3-5 anos**: Bicicletas, brinquedos educativos

Todos os produtos incluem:
- ✅ Certificações de segurança internacionais
- ✅ Avaliações de clientes reais
- ✅ Descrição detalhada
- ✅ Fotos de alta qualidade
- 🎉 Alguns com promoção especial

## 💳 Pagamento e Entrega

### Formas de Pagamento
- **Cartão de Crédito** - Até 12x sem juros
- **Cartão de Débito** - À vista com desconto
- **Pix** - Instantâneo
- **Boleto** - 3 dias úteis
- **PayPal** - Seguro e confiável

### Frete
- **Grátis** para compras acima de R$ 100
- **R$ 15** para compras abaixo de R$ 100
- Atendimento: 3-5 dias (frete pago) ou 5-7 dias (grátis)

## 🔒 Segurança

- ✅ **SSL 256-bit** encriptado
- ✅ **Certificações Internacionais**: CE, INMETRO, ASTM
- ✅ **Produtos Não-Tóxicos**: Livres de BPA e ftalatos
- ✅ **30 dias de Garantia**: Em todos os produtos
- ✅ **Devolução Fácil**: Sem complicações

## 📞 Contato e Suporte

- **Email**: contato@toysstore.com.br
- **WhatsApp**: (11) 99999-9999
- **Chat**: Disponível 24/7
- **Horário**: Seg-Sab 9h às 20h

## 🛠️ Tecnologias Usadas

- **React 18** - Library JavaScript
- **Vite** - Build tool rápido
- **React Router v6** - Roteamento
- **Tailwind CSS** - Framework CSS
- **JavaScript ES6+** - Linguagem
- **LocalStorage** - Persistência de dados

## 🎨 Customização

### Adicionar Novo Produto
Edite `src/data/products.js`:

```javascript
{
  id: 9,
  nome: "Seu Brinquedo",
  preco: 99.90,
  idade: "2-3",
  tipo: "Categoria",
  descricao: "Descrição do produto",
  categoria: "Categoria",
  promocao: false,
  avaliacoes: [
    { usuario: "Nome", nota: 5, comentario: "Ótimo!" }
  ]
}
```

### Modificar Cores
Edite `tailwind.config.js` ou use classes Tailwind nos componentes:

```javascript
from-pink-400 to-purple-400  // Gradiente
bg-gradient-to-r            // Direção
hover:shadow-2xl             // Estados
```

## 📊 Performance

- Build otimizado com Vite (~500KB gzipped)
- Lazy loading de rotas com React Router
- CSS modular com Tailwind
- Imagens otimizadas
- LocalStorage para cache de carrinho

## 🤝 Contribuição

Sinta-se livre para:
- Reportar problemas
- Sugerir melhorias
- Adicionar novos produtos
- Melhorar o design

## 📄 Licença

Este projeto é para fins educacionais e comerciais.

## 👨‍💻 Autor

Desenvolvido com 💚 para trazer alegria às crianças!

---

**ToysStore** - Brinquedos que educam, entretêm e encantam! 🎉

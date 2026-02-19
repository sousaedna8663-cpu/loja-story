// Dados compartilhados de produtos para loja de brinquedos educativos
export const PRODUCTS = [
  {
    id: 1,
    nome: "Chocalho Colorido",
    preco: 39.90,
    precoFormatado: "39,90",
    idade: "0-1",
    tipo: "Sensorial",
    cor: "border-pink-400",
    imagem: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600",
    descricao: "Chocalho seguro e brilhante que estimula os sentidos do bebê. Feito com materiais não-tóxicos.",
    categoria: "Bebê",
    promocao: true,
    desconto: 10,
    avaliacoes: [
      { usuario: "Maria Silva", nota: 5, comentario: "Meu bebê adora! Produção excelente!" },
      { usuario: "João Santos", nota: 4, comentario: "Bom custo-benefício, chegou rápido." }
    ]
  },
  {
    id: 2,
    nome: "Esteira de Atividades",
    preco: 199.90,
    precoFormatado: "199,90",
    idade: "0-2",
    tipo: "Desenvolvimento",
    cor: "border-blue-400",
    imagem: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    descricao: "Esteira com brinquedos pendurados para estimular o desenvolvimento motor e cognitivo.",
    categoria: "Aprendizado",
    promocao: false,
    desconto: 0,
    avaliacoes: [
      { usuario: "Ana Costa", nota: 5, comentario: "Excelente qualidade! Minha filha usa todos os dias." },
      { usuario: "Pedro Lima", nota: 5, comentario: "Vale cada centavo. Recomendo!" }
    ]
  },
  {
    id: 3,
    nome: "Blocos Macios e Seguros",
    preco: 89.90,
    precoFormatado: "89,90",
    idade: "1-3",
    tipo: "Construção",
    cor: "border-yellow-400",
    imagem: "https://images.pexels.com/photos/167769/pexels-photo-167769.jpeg?auto=compress&cs=tinysrgb&w=600",
    descricao: "Conjunto de blocos macios em cores vibrantes. Perfeito para desenvolvimento motor e criatividade.",
    categoria: "Construção",
    promocao: true,
    desconto: 15,
    avaliacoes: [
      { usuario: "Lucia Martins", nota: 5, comentario: "Adorei! Meu filho de 2 anos brinca constantemente." },
      { usuario: "Carlos Gomes", nota: 4, comentario: "Boa qualidade, chegou bem embalado." }
    ]
  },
  {
    id: 4,
    nome: "Bola Sensorial com Texturas",
    preco: 49.90,
    precoFormatado: "49,90",
    idade: "0-2",
    tipo: "Sensorial",
    cor: "border-purple-400",
    imagem: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=600",
    descricao: "Bola com diferentes texturas e cores para estimular os sentidos. Segura e higiênica.",
    categoria: "Bebê",
    promocao: false,
    desconto: 0,
    avaliacoes: [
      { usuario: "Paula Ferreira", nota: 5, comentario: "Perfeita para bebês! Muito fofa." },
      { usuario: "Roberto Silva", nota: 5, comentario: "Comprei 3! Excelente produto." }
    ]
  },
  {
    id: 5,
    nome: "Livro de Pano Interativo",
    preco: 69.90,
    precoFormatado: "69,90",
    idade: "1-3",
    tipo: "Educativo",
    cor: "border-green-400",
    imagem: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600",
    descricao: "Livro de pano colorido com sons, texturas e abas para explorar. Desenvolve linguagem e motor.",
    categoria: "Aprendizado",
    promocao: true,
    desconto: 12,
    avaliacoes: [
      { usuario: "Fernanda Costa", nota: 5, comentario: "Meu filho aprende brincando! Recomendo muito." },
      { usuario: "Ricardo Alves", nota: 4, comentario: "Ótimo para estimular curiosidade." }
    ]
  },
  {
    id: 6,
    nome: "Brinquedo de Encaixe",
    preco: 79.90,
    precoFormatado: "79,90",
    idade: "2-4",
    tipo: "Desenvolvimento",
    cor: "border-orange-400",
    imagem: "https://images.pexels.com/photos/256514/pexels-photo-256514.jpeg?auto=compress&cs=tinysrgb&w=600",
    descricao: "Blocos de encaixe em diferentes formas. Estimula resolução de problemas e criatividade.",
    categoria: "Construção",
    promocao: false,
    desconto: 0,
    avaliacoes: [
      { usuario: "Beatriz Santos", nota: 5, comentario: "Excelente! Minha filha passa horas brincando." },
      { usuario: "Felipe Oliveira", nota: 5, comentario: "Produto de qualidade premium." }
    ]
  },
  {
    id: 7,
    nome: "Boneco de Pelúcia Macio",
    preco: 59.90,
    precoFormatado: "59,90",
    idade: "0-5",
    tipo: "Conforto",
    cor: "border-pink-500",
    imagem: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    descricao: "Boneco de pelúcia super macio e aconchegante. Perfeito para abraçar e dormir.",
    categoria: "Bebê",
    promocao: true,
    desconto: 8,
    avaliacoes: [
      { usuario: "Camila Rosa", nota: 5, comentario: "Seu filho vai amar! Muito fofo." },
      { usuario: "Gustavo Pereira", nota: 5, comentario: "Comprei como presente, fizeram muito sucesso!" }
    ]
  },
  {
    id: 8,
    nome: "Bicicleta Infantil com Acessórios",
    preco: 289.90,
    precoFormatado: "289,90",
    idade: "3-5",
    tipo: "Movimento",
    cor: "border-red-400",
    imagem: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600",
    descricao: "Bicicleta colorida com rodas de treino, sino e acessórios. Ideal para aprender a pedalar.",
    categoria: "Esportes",
    promocao: false,
    desconto: 0,
    avaliacoes: [
      { usuario: "Alessandra Rocha", nota: 5, comentario: "Meu filho aprendeu a andar rápido!" },
      { usuario: "Marcelo Dias", nota: 5, comentario: "Entrega bem embalada, produto excelente." }
    ]
  }
];

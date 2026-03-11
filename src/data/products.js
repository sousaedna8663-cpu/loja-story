
import fogueteImg from '../assets/foguete.jpg';
import ursoImg from '../assets/urso.jpg';
import blocosImg from '../assets/blocos.jpg';
import criancaImg from '../assets/criança.bricando.jpg';

export const PRODUCTS = [
  {
    id: 1,
    nome: "Foguete Espacial Deluxe",
    preco: 149.90,
    precoFormatado: "149,90",
    idade: "5+",
    cor: "border-blue-400",
    imagem: fogueteImg,
    descricao: "Um incrível foguete espacial com detalhes realistas. Perfeito para crianças que adoram explorar o espaço!",
    categoria: "Avançado",
    certificacoes: ["INMETRO", "CE", "Livre de BPA"],
    garantia: "24 meses de garantia contra defeito de fabricação",
    detalhes: ["Pintura segura e atóxica", "Estrutura durável e resistente", "Estimula curiosidade científica"]
  },
  {
    id: 2,
    nome: "Ursinho de Pelúcia",
    preco: 79.00,
    precoFormatado: "79,00",
    idade: "0+",
    cor: "border-pink-400",
    imagem: ursoImg,
    descricao: "Um ursinho macio e aconchegante, perfeito para bebês e crianças pequenas.",
    categoria: "Bebê",
    certificacoes: ["INMETRO", "Hipoalergênico", "Sem costuras perigosas"],
    garantia: "12 meses de garantia integral",
    detalhes: ["Tecido suave e confortável", "Enchimento inofensivo", "Perfeito para abraços seguros"]
  },
  {
    id: 3,
    nome: "Blocos de Construção",
    preco: 115.00,
    precoFormatado: "115,00",
    idade: "3+",
    cor: "border-yellow-400",
    imagem: blocosImg,
    descricao: "Conjunto completo de blocos coloridos para desenvolver criatividade e habilidades motoras.",
    categoria: "Aprendizado",
    certificacoes: ["INMETRO", "CE", "ASTM", "Não-tóxico"],
    garantia: "24 meses de cobertura contra defeitos",
    detalhes: ["100 blocos coloridos", "Desenvolve habilidades motoras", "Estimula criatividade e imaginação"]
  },
  {
    id: 4,
    nome: "Boneco de Ação Herói",
    preco: 89.90,
    precoFormatado: "89,90",
    idade: "4+",
    cor: "border-red-400",
    imagem: criancaImg,
    descricao: "Boneco articulado do seu herói favorito com acessórios includos.",
    categoria: "Ação",
    certificacoes: ["INMETRO", "Sem peças pequenas destacáveis", "Pintura durável"],
    garantia: "18 meses de garantia com cobertura completa",
    detalhes: ["Figura articulada realista", "Acessórios inclusos", "Recomendado para colecionadores"]
  },
  {
    id: 5,
    nome: "Bicicleta Infantil",
    preco: 299.90,
    precoFormatado: "299,90",
    idade: "5+",
    cor: "border-green-400",
    imagem: blocosImg,
    descricao: "Bicicleta colorida com rodinhas de treino, ideal para aprender a andar.",
    categoria: "Esportes",
    certificacoes: ["INMETRO", "CE", "Freios de segurança testados"],
    garantia: "36 meses de garantia estrutural",
    detalhes: ["Rodinhas desmontáveis", "Guidão e assento ajustáveis", "Pintura resistente a intempéries"]
  },
  {
    id: 6,
    nome: "Jogo de Tabuleiro",
    preco: 65.00,
    precoFormatado: "65,00",
    idade: "6+",
    cor: "border-purple-400",
    imagem: criancaImg,
    descricao: "Jogo educativo e divertido para a família toda.",
    categoria: "Jogos",
    certificacoes: ["INMETRO", "Sem tintas alergênicas", "Componentes laváveis"],
    garantia: "12 meses de substituição de peças danificadas",
    detalhes: ["2-4 jogadores", "Desenvolvimento de estratégia", "Tempo de jogo: 20-30 minutos"]
  }
];

// Alias para compatibilidade com imports antigos
export const products = PRODUCTS;

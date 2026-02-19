const express = require('express');
const app = express();

// 1. Configurações (Middleware)
app.use(express.json());
app.use(express.static('loja-story/public')); // Serve o index.html, checkout.html e admin.html

// 2. Banco de Dados Temporário (em memória)
const pedidos = [];
const produtos = [
  { id: 1, nome: "urso de pelucia", preco: 89.90, estoque: 10 },
  { id: 2, nome: "Mouse Gamerblocos de madeira", preco: 150.00, estoque: 5 },
  { id: 3, nome: "foguete espacial", preco: 320.00, estoque: 3 }
];

// 3. Rotas de Produtos
app.get('/api/produtos', (req, res) => {
  res.json(produtos);
});

// 4. Rotas de Pedidos e Finalização
app.post('/api/finalizar', (req, res) => {
    const { cliente, endereco, itens, total } = req.body;
    
    const novoPedido = {
        id: Math.floor(Math.random() * 10000),
        data: new Date().toLocaleString('pt-BR'),
        cliente,
        endereco,
        itens,
        total
    };

    pedidos.push(novoPedido);
    console.log(`✅ Pedido #${novoPedido.id} recebido de: ${cliente}`);
    
    res.json({ mensagem: "Pedido recebido com sucesso!", pedidoId: novoPedido.id });
});

// 5. Rota do Painel Admin
app.get('/api/admin/pedidos', (req, res) => {
    res.json(pedidos);
});

// 6. Iniciar o Servidor (Sempre por último)
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em: http://localhost:${PORT}`);
});



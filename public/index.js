const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Loja Online Rodando! 🚀');
});

app.listen(3000, () => {
  console.log('Servidor em: http://localhost:3000');
});

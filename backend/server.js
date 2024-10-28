// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); 
app.use(express.json()); 
// Exemplo de rota
app.get('/', (req, res) => {
  res.send('API do backend está rodando');
});

// Configuração do servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

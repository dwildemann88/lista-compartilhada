const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes'); // Importando as rotas

app.use(express.json()); // Middleware para processar JSON no corpo da requisição

app.use('/api/users', userRoutes); // Prefixo para as rotas de usuário

module.exports = app; // Exporta a instância do Express

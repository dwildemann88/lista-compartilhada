const express = require('express');
const router = express.Router();

// Rota de cadastro de usuário
router.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  // Lógica para salvar o usuário no banco de dados
  res.status(201).json({ message: 'Usuário registrado com sucesso!' });
});

// Rota de login de usuário
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Lógica de verificação de login
  res.status(200).json({ message: 'Usuário logado com sucesso!' });
});

module.exports = router;

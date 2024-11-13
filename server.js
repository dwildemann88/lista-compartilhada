const express = require('express');
const path = require('path'); // Para resolver caminhos de arquivos
const app = express();
const userRoutes = require('./routes/userRoutes'); // Certifique-se de que o caminho para suas rotas esteja correto

// Middleware para servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para processar JSON no corpo da requisição
app.use(express.json());

// Definindo as rotas para o login e outros recursos
app.use('/api/users', userRoutes);

// Definindo a porta do servidor
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

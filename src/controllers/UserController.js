const bcrypt = require('bcrypt');
const db = require('../db'); // Ajuste o caminho conforme a estrutura do seu projeto

// Função para registrar o usuário
exports.register = async (req, res) => {
    const { username, email, phone, password } = req.body;

    if (!username || !email || !phone || !password) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    // Verifica se o usuário já existe
    db.get('SELECT * FROM users WHERE email = ?', [email], async (err, row) => {
        if (err) {
            return res.status(500).json({ message: "Erro no banco de dados." });
        }

        if (row) {
            return res.status(400).json({ message: "Este e-mail já está em uso." });
        }

        // Criptografa a senha antes de salvar no banco
        const hashedPassword = await bcrypt.hash(password, 10);

        // Salva o novo usuário no banco de dados
        db.run('INSERT INTO users (username, email, phone, password) VALUES (?, ?, ?, ?)', 
            [username, email, phone, hashedPassword], 
            (err) => {
                if (err) {
                    return res.status(500).json({ message: "Erro ao registrar o usuário." });
                }
                res.status(201).json({ message: "Usuário cadastrado com sucesso." });
            }
        );
    });
};

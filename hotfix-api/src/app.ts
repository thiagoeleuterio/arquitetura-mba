import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsing de JSON
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
    res.send('API de Correção em Funcionamento');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
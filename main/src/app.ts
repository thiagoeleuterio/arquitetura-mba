import express from 'express';
import { json } from 'body-parser';
import { router as mainRouter } from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use('/api', mainRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
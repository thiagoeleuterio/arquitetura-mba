import express from 'express';
import { loginRouter } from './routes/login';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/login', loginRouter);

app.listen(PORT, () => {
    console.log(`Feature Login app is running on http://localhost:${PORT}`);
});
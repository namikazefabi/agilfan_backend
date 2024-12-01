import express from 'express';
import cors from 'cors';
import { AppDataSource } from './data-source';
import  usuarioRoutes  from './routes/usuarioRoutes';
import pagamentoRoutes from './routes/pagamentosRoutes';
import turmaRoutes from './routes/turmaRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, TypeScript!');
});

app.use('/users', usuarioRoutes);
app.use('/pagamentos', pagamentoRoutes);
app.use('/turma', turmaRoutes);

const PORT = process.env.PORT || 3001;

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) =>
    console.log('Erro ao conectar com o banco de dados', error)
  );

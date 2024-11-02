import 'dotenv/config'; // Importa as variáveis de ambiente do arquivo .env
import app from './app';
import connectDB from './loaders/mongooseLoader';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDB(); // Aguarde a conexão com o banco de dados
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();
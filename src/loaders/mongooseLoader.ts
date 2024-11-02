import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/meubanco'; // Defina a URI do MongoDB
        await mongoose.connect(mongoURI);
        console.log('MongoDB conectado com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar com o MongoDB:', error);
        process.exit(1); // Encerra o processo em caso de falha
    }
};

export default connectDB;

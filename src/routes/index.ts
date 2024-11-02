import { Router, Request, Response, NextFunction } from 'express';
import userRoutes from './userRoutes';

const router = Router();

// Middleware para logar antes de acessar a rota /users
router.use('/users', (req: Request, res: Response, next: NextFunction) => {
    console.log(`Acessando rota /users - Método: ${req.method} - Hora: ${new Date().toISOString()}`);
    next(); // Chama a próxima função, que neste caso é o roteamento para userRoutes
});

router.use('/users', userRoutes);
router.get('/', (req, res) => {
    res.send('Hello World!');
});

export default router;

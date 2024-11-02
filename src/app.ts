import express, { Application, Request, Response, NextFunction, RequestHandler } from 'express';
import routes from './routes';

const app: Application = express();

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


app.use(express.json());
app.use('/api', routes);
app.get('/', (req: Request, res: Response) => { res.send('Express on Vercel!'); });

export default app;
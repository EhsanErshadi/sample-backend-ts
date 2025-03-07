import express, { Express } from 'express';
import apiRoutes from './routes/apiRoutes';

const app: Express = express();

app.use('/public', express.static('public'));
app.use('/api', apiRoutes);

export default app;
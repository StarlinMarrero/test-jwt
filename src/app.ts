import express, { json, urlencoded } from 'express'
import userRoutes from './routes/user.routes';
const app = express();


app.use(json());
app.use(urlencoded({extended: true}))
app.use(userRoutes);
export default app;
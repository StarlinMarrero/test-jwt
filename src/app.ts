import express, { json, urlencoded } from 'express'
import userRoutes from './routes/user.routes';
import cookieParser from 'cookie-parser'
const app = express();


app.use(json());
app.use(cookieParser())
app.use(urlencoded({extended: true}))
app.use(userRoutes);
export default app;
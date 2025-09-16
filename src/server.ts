import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/demo', express.static('demo'));

app.get('/health', (_req,res)=> res.json({ ok:true }));
app.get('/', (_req,res)=> res.redirect('/demo/index.html'));

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log('Demo on http://localhost:'+port));

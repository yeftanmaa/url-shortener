import express from 'express';
import dotenv from 'dotenv';
import urlsRouter from './src/routes/urls.js';
import indexRouter from './src/routes/redirection.js';
dotenv.config({ path: './.env'});

// Server setup
const app = express();
const PORT = process.env.PORT || 3333;

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1', urlsRouter);
app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`);
})
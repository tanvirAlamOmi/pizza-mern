import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import connectDb from '../server/config/db.js';
import router from '../server/router/app.router.js';
import errorHandler from './commons/middlewares/error_handler.middleware.js';

const app = express();
connectDb();

app.use(express.json());
app.use('/api', router);

app.use(errorHandler);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import connectDb from './config/db.js';
import router from './router/app.router.js';
import errorHandler from './commons/middlewares/error_handler.middleware.js';
import path from 'path'

const app = express();
connectDb();

app.use(express.json());

if(process.env.NODE_ENV === 'production'){
    app.use('/', express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '/client/build.index.html'))
    })
}


app.use('/api', router);

app.use(errorHandler);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

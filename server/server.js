import 'dotenv/config';
import express from 'express'
import connectDb from '../server/config/db.js'
import router from '../server/router/app.router.js';

const app = express();
connectDb();

app.use(express.json());
app.use('/api', router);
  
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
    
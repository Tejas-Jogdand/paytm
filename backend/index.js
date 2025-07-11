import express from "express";
const app = express();
const port = 3000;
import cors from 'cors';
import bodyParser from 'body-parser';

import mainRouter from './routes/index.js';

app.use(cors());
app.use(bodyParser.json())

app.use('/api/v1',mainRouter);


// api/v1/../..
// api/v2/../..



app.listen(port,()=>{console.log(`Runnning on port ${port}`)});
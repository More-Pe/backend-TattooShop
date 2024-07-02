import express from 'express';

import 'dotenv/config';

import { AppDataSource } from './database/db';

const app = express();

app.use(express.json())

const PORT = process.env.port || 4000;

app.get('/healthy', (req, res) => {
    
    //    res.send('Server is healthy')
    res.status(200).json(
        {
     success: true,
     message: "Server is healthy"
    }
    
)
})

app.listen(PORT, () => {
    console.log('Server is running.');
})

AppDataSource.initialize()
.then(() => {
console.log('Database connected');
})
.catch(error => {
console.log(error)
})

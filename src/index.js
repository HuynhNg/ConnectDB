import express from 'express';
import routers from './api/index.js';
import mysql from 'mysql2/promise';
const app = express();

app.use(express.json());

app.use('/', routers);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
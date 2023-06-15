const express = require('express');
const cors = require('cors');

const routers = require('./routers');

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(routers);

module.exports = app;
const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', proxy('http://localhost:8001')); //customer-service

app.listen(8000, () => {
    console.log('Gateway service is listening on port 8001');
});

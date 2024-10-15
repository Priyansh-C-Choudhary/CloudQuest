const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json({"message": "Customer service is up and running"});
});

// Start the server and listen on port 8001
app.listen(8001, () => {
    console.log('Customer service is listening on port 8001');
});

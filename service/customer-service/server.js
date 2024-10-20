const env = require('dotenv').config();
const express = require('express');
const port = process.env.PORT;
const app = express();
const mongoose = require('mongoose');

// Guest and Password Reset routes
const guestRoutes = require('./routes/guest');
const passwordReset = require("./routes/resetPassword");

// app.use
app.use(express.json());
app.use('/api', guestRoutes);
app.use("/api/password-reset", passwordReset);

// Server listening
app.listen(port, () => console.log(`Server running on port ${port}`));

// MongoDB & Mongoose connection using URL from .env file
mongoose.connect(
    process.env.MONGO_DB_URL,  // Using the URL from .env file
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(() => {
    console.log(`Database connected`);
}).catch((error) => {
    console.log(`Database connection error: ${error}`);
});

// Basic routes
app.get('/', (req, res, next) => {
    res.send(`Checked`);
});

app.post('/data', (req, res, next) => {
    res.status(200).json({ message: req.body });
});

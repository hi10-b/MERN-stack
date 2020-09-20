const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB connection succesful");
})

const eventRouter = require('./routes/eventsRoute');

app.use('/events', eventRouter);

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})

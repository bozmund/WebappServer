const express = require('express');

const app = express();

const dbConfig = require('./db.js');
const roomsRoute = require('./routes/roomsRoute');

app.use('/api/rooms', roomsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
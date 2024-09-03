const express = require('express');

const app = express();

const dbConfig = require('./db.js');
const roomsRoute = require('./routes/roomsRoute');
const userRoute = require('./routes/userRoute');
const bookingRoute = require('./routes/bookingsRoute');

app.use(express.json());

app.use('/api/rooms', roomsRoute);
app.use('/api/users' , userRoute);
app.use('/api/bookings', bookingRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
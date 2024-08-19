const express = require('express');
const router = express.Router();

const Room = require('../models/room');

router.get('/getallrooms', async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;
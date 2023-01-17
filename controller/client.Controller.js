const express = require('express');
const router = express.Router();
const Client = require('../model/clients');

router.post('/', async (req, res) => {
    try {
        const client = await Client.create(req.body);
        res.status(201).json({ message: 'User created successfully', client });
    } catch (error) {
        if (error.code === 11000) { // Mongoose specific duplicate key error code
            return res.status(409).json({ message: 'Email already exists' });
        }
        res.status(500).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const listeClient = await Client.find();
        res.status(201).json({ message: 'User created successfully', listeClient });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/:email/:mdp', async (req, res) => {
    try {
        const client = await Client.findOne({ email: req.params.email, mdp: req.params.mdp });
        res.status(200).json({ client });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
const express = require("express");
const Client = require('../model/clients');

class ClientController {
    rest(app) {
      const router = express.Router();
      router.get('/', async (req, res) => {
        try {
          const listeClient = await Client.find();
          res.status(201).json({ message: 'ok', listeClient });
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
    
  
      app.use('/client', router);
    }
  }

module.exports = new ClientController();
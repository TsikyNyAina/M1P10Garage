Object.defineProperty(exports, "__esModule", { value: true });
exports.VoitureController = void 0;
const decorator_1 = require("../decorator");
const express = require("express");
const Voiture = require('../model/voiture');

class VoitureController {
    rest(app) {
        router.post('/', async (req, res) => {
            try {
                const voiture = await Voiture.create(req.body);
                res.status(201).json({ message: 'Voiture ajoutée avec succées', voiture });
            } catch (error) {
                if (error.code === 11000) { // Mongoose sy specific duplicate key error code
                    return res.status(409).json({ message: 'Voiture existe déjà' });
                }
                res.status(500).json({ message: error.message });
            }
        });
        
        router.get('/', async (req, res) => {
            try {
                const listeVoiture = await Voiture.find();
                res.status(200).json({ listeVoiture });
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
        
        router.post('/:client_id', async (req, res) => {
            try {
                const voiture = await Voiture.findOne({ client_id: req.params.client_id });
                res.status(200).json({ voiture });
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    app.use('/voiture', router);
    }
  }

exports.VoitureController = VoitureController;
exports.default = VoitureController;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactureController = void 0;
const decorator_1 = require("../decorator");
const express = require("express");
const Facture = require('../model/factures');

class FactureController {
    rest(app) {
      const router = express.Router();
      router.get('/', async (req, res) => {
        try {
          const listeFacture = await Facture.find();
          res.status(201).json({ message: 'ok', listeFacture });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      });

      router.get('/:status', async (req, res) => {
        try {
          const listeFacture = await Facture.find({status:req.params.status});
          res.status(201).json({ message: 'ok', listeFacture });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      });

      router.post('/:reparation_id', async (req, res) => {
        try {
            const facture = await Facture.findOne({ reparation_id: req.params.reparation_id});
            res.status(200).json({ facture });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
    
    router.post('/', async (req, res) => {
      try {
          const reparation = await Reparation.create(req.body);
          res.status(201).json({ message: 'Facture enregistrée', reparation });
      } catch (error) {
          res.status(500).json({ message: error.message });
      }
    });
  
      app.use('/facture', router);
    }
  }

  exports.FactureController = FactureController;
  exports.default = FactureController;
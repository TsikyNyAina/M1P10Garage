Object.defineProperty(exports, "__esModule", { value: true });
exports.ReparationController = void 0;
const decorator_1 = require("../decorator");
const express = require("express");
const Reparation = require('../model/reparation');

class ReparationController {
    rest(app) {
      const router = express.Router();
      router.get('/', async (req, res) => {
        try {
          const listeClient = await Reparation.find();
          res.status(201).json({ message: 'ok', listeClient });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      });

      router.get('/:status', async (req, res) => {
        try {
          const listeClient = await Reparation.find({status:req.params.status});
          res.status(201).json({ message: 'ok', listeClient });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      });

      router.post('/:voiture_id', async (req, res) => {
        try {
            const reparation = await Reparation.findOne({ voiture_id: req.params.voiture_id});
            res.status(200).json({ Reparation });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
    
    router.post('/', async (req, res) => {
      try {
          const reparation = await Reparation.create(req.body);
          res.status(201).json({ message: 'Reparation enregistrée', reparation });
      } catch (error) {
          res.status(500).json({ message: error.message });
      }
    });
  
      app.use('/reparation', router);
    }
  }

  exports.ReparationController = ReparationController;
  exports.default = ReparationController;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsableController = void 0;
const decorator_1 = require("../decorator");
const express = require("express");
const Responsable = require('../model/responsable');

class ResponsableController {
    rest(app) {
        const router = express.Router();

        router.post('/:email/:mdp', async (req, res) => {
            try {
                const responsable = await Responsable.findOne({ email: req.params.email, mdp: req.params.mdp });
                res.status(200).json({ responsable });
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        });

        app.use('/responsable', router);
    }
}

exports.ResponsableController = ResponsableController;
exports.default = ResponsableController;
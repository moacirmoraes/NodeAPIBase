const express = require('express');
const router = express.Router();

const BreedController = require('./controllers/BreedController');

//Breed
router.get('/breed', BreedController.findAll);
router.get('/breed/:id', BreedController.findById);
router.post('/breed', BreedController.insert);
router.put('/breed/:id', BreedController.update);
router.delete('/breed/:id', BreedController.delete);

//

module.exports = router;
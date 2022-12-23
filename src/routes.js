const { Router } = require('express');

const CharacterController = require('./app/controllers/CharacterController');

const router = Router();

router.get('/characters', CharacterController.index);

module.exports = router;

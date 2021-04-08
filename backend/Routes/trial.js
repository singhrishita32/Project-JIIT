const express = require('express');
const router = express.Router();
const { createTrial,getTrial,trialPhoto,trialById } = require('../Controllers/trial')
router.post('/trial/new', createTrial);
router.get('/trial/get', getTrial)
router.get('/trial/photo/:trialId', trialPhoto)

router.param("trialId",trialById)
module.exports = router
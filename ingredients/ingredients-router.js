const express = require('express')

const router = express.Router();

const Ingredients = require('./ingredients-model');

router.use(express.json())

module.exports = router
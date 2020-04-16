const express = require("express");

const router = express.Router();

const Recipes = require("./recipes-model");

router.use(express.json());


module.exports = router;
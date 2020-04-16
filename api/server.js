const express = require("express");
const server = express();
const recipesRouter = require('../recipes/recipes-router')
const ingredientsRouter = require('../ingredients/ingredients-router')

server.use(express.json());

server.get('/', (req, res) => {
  res.send('<h2>THE SERVER IS UP AND RUNNING TAKE A BREAK YOU HAVE COME SO FAR</h2>')
})

server.use('/api/recipes', recipesRouter)

server.use('/api/ingredients', ingredientsRouter)

module.exports = server;

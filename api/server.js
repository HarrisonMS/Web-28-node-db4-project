const express = require("express");
const server = express();
const recipesRouter = require('../recipes/recipes-router')

server.use(express.json());

server.get('/', (req, res) => {
  res.send('<h2>THE SERVER IS UP AND RUNNING TAKE A BREAK YOU HAVE COME SO FAR</h2>')
})

server.use('/api/recipes', recipesRouter)

module.exports = server;

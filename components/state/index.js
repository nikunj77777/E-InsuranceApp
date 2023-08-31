const express = require('express')
const { addState, addCity } = require('./controller/state')


const stateRouter = express()



stateRouter.post('/',addState)
stateRouter.post('/:id',addCity)



module.exports = stateRouter
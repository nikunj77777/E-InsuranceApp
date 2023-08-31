const express = require('express')
const { createInsurancePlan, createInsuranceScheme, createInsuranceType } = require('./controller/insurance')
const insuranceRouter = express()

insuranceRouter.post('/',createInsuranceType)
insuranceRouter.post('/:id',createInsuranceScheme)
insuranceRouter.post('/:id/plan',createInsurancePlan)




module.exports=insuranceRouter
const express = require('express')
const userRouter = require('./user')
const insuranceRouter = require('./insurance')
const stateRouter = require('./state')
const router = express()


router.use('/user/:roleid',userRouter)
router.use('/insurance',insuranceRouter)
router.use('/state',stateRouter)


module.exports=router
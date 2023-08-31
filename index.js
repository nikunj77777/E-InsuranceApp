const express = require('express')
const application = express()

const router = require('./components')
const cookieParser = require('cookie-parser')

application.use(express.json())
application.use(cookieParser())

application.use('/api/v1/einsurance', router)

application.listen(9000, () => {
    console.log("started at 9000");
})

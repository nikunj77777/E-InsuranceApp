const express = require('express')
const {createAdmin,createEmployee,createAgent,createCustomer,createRole, updateAdmin, updateCustomer, updateAgent, updateEmployee, createCustomerPolicy, makePayment} = require('./controller/user')
const userRouter = express.Router({ mergeParams: true })

const{login,logout}=require('./controller/login')
const JWTMiddleware = require('../../middleware/Authentication')


const isAdminOrEmployee = JWTMiddleware.authenticateEither(JWTMiddleware.verifyAdminWithCookie,JWTMiddleware.verifyEmployeeWithCookie)



//TWO MIDDLEWARES USED
userRouter.post('/',createRole) 
userRouter.post('/login',login)
userRouter.post('/logout',logout)

userRouter.post('/admin',createAdmin)
userRouter.put('/admin/:id',updateAdmin)
// userRouter.get delete

userRouter.post('/agent',isAdminOrEmployee,createAgent)
userRouter.put('/agent/:id',updateAgent)
// userRouter.get delete

userRouter.post('/customer',createCustomer)
userRouter.put('/customer/:id',updateCustomer)
userRouter.post('/customer/:id/policy',createCustomerPolicy)
userRouter.post('/customer/:custid/policy/payment/:id',makePayment)
// userRouter.get delete

userRouter.post('/employee',JWTMiddleware.verifyAdminWithCookie,createEmployee)
userRouter.put('/employee/:id',updateEmployee)
// userRouter.get delete

module.exports =userRouter
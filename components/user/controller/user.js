const { ValidationError } = require("../../../error");
const { User, CustomerPolicy, Payment } = require("../service/user");
const http = require('http-status-codes')



const createRole = async (req, resp) => {
    try {
        const { name } = req.body
        let roleObj = await User.createRole(name)
        resp.status(http.StatusCodes.ACCEPTED).send(roleObj)
    } catch (error) {
        resp.status(http.StatusCodes.BAD_REQUEST).send("Bad Request")
    }
}
const createAdmin = async (req, resp) => {
    try {
        const { roleid } = req.params
        const { fullName, loginId, password, address, email, state, city, pincode, mobileNo } = req.body
        let adminObj = await User.createAdmin(roleid, fullName, loginId, password, address, email, state, city, pincode, mobileNo)
        resp.status(http.StatusCodes.ACCEPTED).send(adminObj)
    } catch (error) {
        console.log(error)
        resp.status(http.StatusCodes.BAD_REQUEST).send("Bad Request")
    }
}
const updateAdmin = async (req, resp) => {
    try {
        const { roleid, id } = req.params
        const { parameter, newValue } = req.body
        let adminObj = await User.updateAdmin(id, parameter, newValue)
        resp.status(http.StatusCodes.ACCEPTED).send(adminObj)
    } catch (error) {
        resp.status(http.StatusCodes.BAD_REQUEST).send("Bad Request")
    }
}
const createEmployee = async (req, resp) => {
    try {
        const { roleid } = req.params
        const { fullName, loginId, password, address, email, state, city, pincode, mobileNo } = req.body
        let empObj = await User.createEmployee(roleid, fullName, loginId, password, address, email, state, city, pincode, mobileNo)
        resp.status(http.StatusCodes.ACCEPTED).send(empObj)
    } catch (error) {
        resp.status(http.StatusCodes.BAD_REQUEST).send("Bad Request")
    }
}
const updateEmployee = async (req, resp) => {
    try {
        const { roleid, id } = req.params
        const { parameter, newValue } = req.body
        let empObj = await User.updateEmployee(id, parameter, newValue)
        resp.status(http.StatusCodes.ACCEPTED).send(empObj)
    } catch (error) {
        resp.status(http.StatusCodes.BAD_REQUEST).send("Bad Request")
    }
}
const createAgent = async (req, resp) => {
    try {
        const { roleid } = req.params
        const { fullName, loginId, password, address, email, state, city, pincode, mobileNo } = req.body
        let agentObj = await User.createAgent(roleid, fullName, loginId, password, address, email, state, city, pincode, mobileNo)
        resp.status(http.StatusCodes.ACCEPTED).send(agentObj)
    } catch (error) {
        resp.status(http.StatusCodes.BAD_REQUEST).send("Bad Request")
    }
}
const updateAgent = async (req, resp) => {
    try {
        const { roleid, id } = req.params
        const { parameter, newValue } = req.body
        let agentObj = await User.updateAgent(id, parameter, newValue)
        resp.status(http.StatusCodes.ACCEPTED).send(agentObj)
    } catch (error) {
        resp.status(http.StatusCodes.BAD_REQUEST).send("Bad Request")
    }
}
const createCustomer = async (req, resp) => {
    try {
        const { roleid } = req.params
        const { fullName, loginId, password, address, email, state, city, pincode, mobileNo } = req.body
        let custObj = await User.createCustomer(roleid, fullName, loginId, password, address, email, state, city, pincode, mobileNo)
        resp.status(http.StatusCodes.ACCEPTED).send(custObj)
    } catch (error) {
        resp.status(http.StatusCodes.BAD_REQUEST).send("Bad Request")
    }
}
const updateCustomer = async (req, resp) => {
    try {
        const { roleid, id } = req.params
        const { parameter, newValue } = req.body
        let customerObj = await User.updateCustomer(id, parameter, newValue)
        resp.status(http.StatusCodes.ACCEPTED).send(customerObj)
    } catch (error) {
        resp.status(http.StatusCodes.BAD_REQUEST).send("Bad Request")
    }
}

const createCustomerPolicy = async (req, resp) => {
    try {
        let { roleid, id } = req.params
        id=parseInt(id)
        const { policyId, totalInvestment, totalperiod, premPeriod } = req.body
        let policyObj = await CustomerPolicy.createCustomerPolicy(id, policyId, totalInvestment, totalperiod, premPeriod)
        resp.status(http.StatusCodes.ACCEPTED).send(policyObj)
    } catch (error) {
        console.log(error)
        resp.status(http.StatusCodes.BAD_REQUEST).send("Bad Request")
    }
}

const makePayment= async(req,resp)=>{
    try {
        let {id,custid}=req.params
        id=parseInt(id)
        const {status}=req.body
        let paymentObj=await Payment.makePayment(custid,id,status)
        resp.status(http.StatusCodes.ACCEPTED).send(paymentObj)
    } catch (error) {
        console.log(error)
        resp.status(http.StatusCodes.BAD_REQUEST).send("Bad Request")
    }
}


module.exports = { createAdmin, updateAdmin, createEmployee, updateEmployee, createAgent, updateAgent, createCustomer, updateCustomer, createRole ,createCustomerPolicy,makePayment}
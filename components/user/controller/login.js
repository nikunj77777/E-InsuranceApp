const { NotFound, UnAuthorizedError ,ValidationError} = require('../../../error')
require('dotenv').config()
const http = require('http-status-codes')

let {login:loginAD}=require('../service/login')

const login = async (req, resp, next) => {
    try {
        const {loginid, password } = req.body
        if (typeof loginid != "string") {
            throw new ValidationError("User ID is not Valid")
        }
        if (typeof password != "string") {
            throw new ValidationError("Password is not Valid")
        }
        const token = await loginAD(loginid, password)
        resp.cookie(process.env.COOKIE_NAME_AUTH, token)
        resp.status(http.StatusCodes.ACCEPTED).send({accesToken: token})
    } catch (error) {
        next(error)
    }
}

const logout=(req,resp,next)=>{
    const token = req.cookies[process.env.COOKIE_NAME_AUTH]
    if(!token){
        throw new NotFound("Cookie Not Found")
    }
    resp.cookie(process.env.COOKIE_NAME_AUTH,token,{expires:new Date()})
    resp.status(http.StatusCodes.ACCEPTED).send("Logged Out ")
}

module.exports = { login,logout }
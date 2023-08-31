const { ValidationError } = require("../../../error");
const Insurance = require("../service/insurance");

const http = require('http-status-codes')


const createInsurancePlan = async (req, resp, next) => {
    try {
        let { id } = req.params
        id=parseInt(id)
        let { schemeId, insuranceName, insuranceType, minAge, maxAge, minInvestment, maxInvestment, policyTermMin, policyTermMax, profit } = req.body
        let insuObj = await Insurance.InsurancePlan.createInsurancePlan(id, schemeId, insuranceName, insuranceType, minAge, maxAge, minInvestment, maxInvestment, policyTermMin, policyTermMax, profit)
        resp.status(http.StatusCodes.ACCEPTED).send(insuObj)
    } catch (error) {
        console.log(error)
        resp.status(http.StatusCodes.BAD_REQUEST).send("Bad Request")
    }
}

const createInsuranceScheme = async (req, resp, next) => {
    try {
        let {id} = req.params
        console.log(id)
        let { insuranceType, insuranceNote, status } = req.body
        let insuObj = await Insurance.InsuranceScheme.createInsuranceScheme(id, insuranceType, insuranceNote, status)
        resp.status(http.StatusCodes.ACCEPTED).send(insuObj)
    } catch (error) {
        console.log(error)
        resp.status(http.StatusCodes.BAD_REQUEST).send("Bad Request")
    }

}

const createInsuranceType = async(req,resp,next)=>{
    try {
        let{insuranceType,status}=req.body
        console.log(status)
        let insuObj=await Insurance.InsuranceType.createInsuranceType(insuranceType,status)
        resp.status(http.StatusCodes.ACCEPTED).send(insuObj)
    } catch (error) {
        console.log(error)
        resp.status(http.StatusCodes.BAD_REQUEST).send("Bad Request")
    }
}

module.exports = { createInsurancePlan ,createInsuranceScheme,createInsuranceType}


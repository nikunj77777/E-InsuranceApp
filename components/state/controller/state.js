const { ValidationError } = require("../../../error")

const http = require('http-status-codes')

const {State,City}= require("../service/state")


const addState=async(req,resp)=>{
    const{name}=req.body
    if(typeof name !="string"){
        throw new ValidationError("State Name not valid")
    }
    let rowState=await State.addState(name)
        resp.status(http.StatusCodes.ACCEPTED).send(rowState)
}

const addCity=async(req,resp)=>{
    const{name}=req.body
    let{id}=req.params
    id=parseInt(id)
    if(typeof name !="string"){
        throw new ValidationError("City Name not valid")
    }
    if(typeof id !="number"){
        throw new ValidationError("State Id  not valid")
    }
    let rowCity = await City.addCity(id,name)
    resp.status(http.StatusCodes.ACCEPTED).send(rowCity)
}

module.exports ={addState,addCity}

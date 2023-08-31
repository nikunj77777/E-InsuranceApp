const db = require("../../../models")

class State{
    constructor(stateName){
        this.stateName=stateName
    }
    static async addState(name){
        try {
            let stateObj=new State(name)
            let rowState = db.state.create(stateObj)
            return rowState
        } catch (error) {
            throw error
        }
    }
}

class City{
    constructor(stateId,cityName)
    {
        this.stateId=stateId
        this.cityName=cityName
    }
    static async addCity(id,name){
        try {
            let cityObj=new City(id,name)
            let rowCity = db.city.create(cityObj)
            return rowCity
        } catch (error) {
            throw error
        }
    }
    
}




module.exports={State,City}
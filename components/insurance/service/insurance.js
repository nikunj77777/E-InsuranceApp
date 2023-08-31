const db = require("../../../models")

class InsuranceType{
    constructor(insuranceType,status){
        this.insuranceType=insuranceType,
        this.status=status
    }
    static async createInsuranceType(insuranceType,status){
        let insuObj= new InsuranceType(insuranceType,status)
        console.log();
        let insuTypRow=db.insurancetype.create(insuObj)
        return insuTypRow
    }
}

class InsuranceScheme{
    constructor(insurancetypeId,insuranceType,insuranceNote,status){
        this.insurancetypeId=insurancetypeId
        this.insuranceType=insuranceType
        this.insuranceNote=insuranceNote
        this.status=status
    }
    static async createInsuranceScheme(typeId,insuranceType,insuranceNote,status){
        let insuSchObj= new InsuranceScheme(typeId,insuranceType,insuranceNote,status)
        let insuSchRow=db.insurancescheme.create(insuSchObj)
        return insuSchRow
    }
}

class InsurancePlan{
    constructor(insurancetypeId,insuranceschemeId,insuranceName,insuranceType,minAge,maxAge,minInvestment,maxInvestment,policyTermMin,policyTermMax,profit){
        this.insurancetypeId=insurancetypeId
        this.insuranceschemeId=insuranceschemeId
        this.insuranceName=insuranceName
        this.insuranceType=insuranceType
        this.minAge=minAge
        this.maxAge=maxAge
        this.minInvestment=minInvestment
        this.maxInvestment=maxInvestment
        this.policyTermMax=policyTermMax
        this.policyTermMin=policyTermMin
        this.profit=profit
    }
    static async createInsurancePlan(typeId,schemeId,insuranceName,insuranceType,minAge,maxAge,minInvestment,maxInvestment,policyTermMin,policyTermMax,profit){
        let insuPlanObj= new InsurancePlan(typeId,schemeId,insuranceName,insuranceType,minAge,maxAge,minInvestment,maxInvestment,policyTermMin,policyTermMax,profit)
        let insuPlanRow=db.insuranceplan.create(insuPlanObj)
        return insuPlanRow
    }
}


    



module.exports={InsurancePlan,InsuranceScheme,InsuranceType}
const { ValidationError } = require("../../../error")
const db = require("../../../models")
const bcrypt = require('bcrypt')    
const moment = require('moment')

class User {
    constructor(roleId, fullName, loginId, password, address, email, state, city, pincode, mobileNo) {
        this.roleId = roleId
        this.fullName = fullName
        this.loginId = loginId
        this.password = password
        this.address = address
        this.email = email
        this.state = state
        this.city = city
        this.pincode = pincode
        this.mobileNo = mobileNo
    }
    static async createRole(roleName) {
        try {
            let rowRole = db.role.create({ roleName: roleName })
            return rowRole
        } catch (error) {
            throw error
        }
    }
    static async createAdmin(roleId, fullName, loginId, password, address, email, state, city, pincode, mobileNo) {
        try {
            let hash = User.hashPassword(password)
            let adminObj = new User(roleId, fullName, loginId, password, address, email, state, city, pincode, mobileNo)
            adminObj.password=await hash
            let adminRow = db.user.create(adminObj)
            return adminRow
        } catch (error) {
            throw error
        }
    }
    static async updateAdmin(adminid, parameter, newValue) {
        try {
            let admin
            switch (parameter) {
                case "fullName":
                    admin = await db.user.update({ fullName: newValue }, { where: { id: adminid } })
                    return admin
                case "loginId":
                    admin = await db.user.update({ loginId: newValue }, { where: { id: adminid } })
                    return admin
                case "password":
                    admin = await db.user.update({ password: newValue }, { where: { id: adminid } })
                    return admin
                case "email":
                    admin = await db.user.update({ email: newValue }, { where: { id: adminid } })
                    return admin
                case "state":
                    admin = await db.user.update({ state: newValue }, { where: { id: adminid } })
                    return admin
                case "city":
                    admin = await db.user.update({ city: newValue }, { where: { id: adminid } })
                    return admin
                case "pincode":
                    admin = await db.user.update({ pincode: newValue }, { where: { id: adminid } })
                    return admin
                case "mobileNo":
                    admin = await db.user.update({ mobileNo: newValue }, { where: { id: adminid } })
                    return admin
                default:
                    throw new ValidationError("Parameter Not Valid")
            }
        } catch (error) {
            throw error
        }
    }
    static async createEmployee(roleId, fullName, loginId, password, address, email, state, city, pincode, mobileNo) {
        try {
            let hash = User.hashPassword(password)
            let empObj = new User(roleId, fullName, loginId, password, address, email, state, city, pincode, mobileNo)
            empObj.password=await hash
            let empRow = db.user.create(empObj)
            return empRow
        } catch (error) {
            throw error
        }
    }
    static async updateEmployee(customerid, parameter, newValue) {
        try {
            let customer
            switch (parameter) {
                case "fullName":
                    customer = await db.user.update({ fullName: newValue }, { where: { id: customerid } })
                    return customer
                case "loginId":
                    customer = await db.user.update({ loginId: newValue }, { where: { id: customerid } })
                    return customer
                case "password":
                    customer = await db.user.update({ password: newValue }, { where: { id: customerid } })
                    return customer
                case "email":
                    customer = await db.user.update({ email: newValue }, { where: { id: customerid } })
                    return customer
                case "state":
                    customer = await db.user.update({ state: newValue }, { where: { id: customerid } })
                    return customer
                case "city":
                    customer = await db.user.update({ city: newValue }, { where: { id: customerid } })
                    return customer
                case "pincode":
                    customer = await db.user.update({ pincode: newValue }, { where: { id: customerid } })
                    return customer
                case "mobileNo":
                    customer = await db.user.update({ mobileNo: newValue }, { where: { id: customerid } })
                    return customer
                default:
                    throw new ValidationError("Parameter Not Valid")
            }
        } catch (error) {
            throw error
        }
    }
    static async createCustomer(roleId, fullName, loginId, password, address, email, state, city, pincode, mobileNo) {
        try {
            let hash = User.hashPassword(password)
            let custObj = new User(roleId, fullName, loginId, password, address, email, state, city, pincode, mobileNo)
            custObj.password=await hash
            let custRow = db.user.create(custObj)
            return custRow
        } catch (error) {
            throw error
        }
    }
    static async updateCustomer(customerid, parameter, newValue) {
        try {
            let customer
            switch (parameter) {
                case "fullName":
                    customer = await db.user.update({ fullName: newValue }, { where: { id: customerid } })
                    return customer
                case "loginId":
                    customer = await db.user.update({ loginId: newValue }, { where: { id: customerid } })
                    return customer
                case "password":
                    customer = await db.user.update({ password: newValue }, { where: { id: customerid } })
                    return customer
                case "email":
                    customer = await db.user.update({ email: newValue }, { where: { id: customerid } })
                    return customer
                case "state":
                    customer = await db.user.update({ state: newValue }, { where: { id: customerid } })
                    return customer
                case "city":
                    customer = await db.user.update({ city: newValue }, { where: { id: customerid } })
                    return customer
                case "pincode":
                    customer = await db.user.update({ pincode: newValue }, { where: { id: customerid } })
                    return customer
                case "mobileNo":
                    customer = await db.user.update({ mobileNo: newValue }, { where: { id: customerid } })
                    return customer
                default:
                    throw new ValidationError("Parameter Not Valid")
            }
        } catch (error) {
            throw error
        }
    }
    static async createAgent(roleId, fullName, loginId, password, address, email, state, city, pincode, mobileNo) {
        try {
            let hash = User.hashPassword(password)
            let agentObj = new User(roleId, fullName, loginId, password, address, email, state, city, pincode, mobileNo)
            agentObj.password=await hash 
            let agentRow = db.user.create(agentObj)
            return agentRow
        } catch (error) {
            throw error
        }
    }
    static async updateAgent(agentid, parameter, newValue) {
        try {
            let agent
            switch (parameter) {
                case "fullName":
                    agent = await db.user.update({ fullName: newValue }, { where: { id: agentid } })
                    return agent
                case "loginId":
                    agent = await db.user.update({ loginId: newValue }, { where: { id: agentid } })
                    return agent
                case "password":
                    agent = await db.user.update({ password: newValue }, { where: { id: agentid } })
                    return agent
                case "email":
                    agent = await db.user.update({ email: newValue }, { where: { id: agentid } })
                    return agent
                case "state":
                    agent = await db.user.update({ state: newValue }, { where: { id: agentid } })
                    return agent
                case "city":
                    agent = await db.user.update({ city: newValue }, { where: { id: agentid } })
                    return agent
                case "pincode":
                    agent = await db.user.update({ pincode: newValue }, { where: { id: agentid } })
                    return agent
                case "mobileNo":
                    agent = await db.user.update({ mobileNo: newValue }, { where: { id: agentid } })
                    return agent
                default:
                    throw new ValidationError("Parameter Not Valid")
            }
        } catch (error) {
            throw error
        }
    }
    static hashPassword(password) {
        try {
            let hash = bcrypt.hash(password, 12)
            return hash
        } catch (error) {
            throw error
        }
    }
    static comparePassword(password, hash) {
        try {
            let cmp = bcrypt.compare(password, hash)
            return cmp
        } catch (error) {

        }
    }
}



class CustomerPolicy{
    constructor(custId,policyId,totalInvestment,totalPeriod,premPeriod){
        this.custId=custId
        this.policyId=policyId
        this.totalInvestment=totalInvestment
        this.totalPeriod=totalPeriod
        this.premPeriod=premPeriod
    }
    static async createCustomerPolicy(custId,policyId,totalInvestment,totalPeriod,premPeriod){
        let policyObj=new CustomerPolicy(custId,policyId,totalInvestment,totalPeriod,premPeriod)
        let policyRow = await db.policy.create(policyObj)
        for (let index = 0; index < premPeriod; index++) {
            let customerPolicy = await db.policy.findOne({where:{custId:custId,policyId:policyId}})
            let paymentObj = new Payment(customerPolicy.id,undefined,undefined,totalInvestment/totalPeriod,"Pending")
            await db.payment.create(paymentObj)  
        }
        return policyRow
    }
}

class Payment{
    constructor(custPolicyId,dueDate,paidDate,installmentAmount,status)
    {
        this.custPolicyId=custPolicyId
        this.dueDate=dueDate
        this.paidDate=paidDate
        this.installmentAmount=installmentAmount
        this.status=status
    }
    static async makePayment(custId,id,status)
    {
        let paidDate=new Date()
        const dueDateInterval = moment.duration(1, 'years')
        let customerPolicy = await db.policy.findOne({where:{custId:custId}})
        for (let index = 1; index <= customerPolicy.premPeriod; index++) {
            const paymentDueDate = moment().add(index * dueDateInterval)
            let payment = await db.payment.update({dueDate:paymentDueDate.toDate()},{where:{id:index}})
        }
        let payment = await db.payment.update({paidDate:paidDate,status:status},{where:{id:id,status:"Pending"}})
        return payment
    }
}



// class Payment{
//     constructor()
// }
module.exports = {User, CustomerPolicy,Payment}
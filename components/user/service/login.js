const Unauthorized = require("../../../error/UnAuthorizedError")
const JWTMiddleware = require("../../../middleware/Authentication")
const db = require("../../../models")
const User = require("./user")

const  login = async(loginid, passwordd) => {
    try {
        let user = await db.user.findOne({where:{loginId:loginid}})
        if(!await User.comparePassword(passwordd,user.password)){
            throw new Unauthorized("Password Does not Match")
        }
        return JWTMiddleware.sign(user.roleId,user.id)
    } catch (error) {
        throw error
    }
}

module.exports = { login }
const jwt = require('jsonwebtoken')
const { NotFound, UnAuthorizedError } = require('../error')
require('dotenv').config()

class JWTMiddleware{
    constructor(userid,roleid){
        this.userid=userid
        this.roleid=roleid
    }
    static sign(userid, roleid) {
        try {
            return jwt.sign(JSON.stringify(new JWTMiddleware(userid,roleid)), process.env.SECRET_KEY_FOR_AUTH)
        } catch (error) {
            throw error
        }
    }
    static verify(token) {
        try {
            let payload = jwt.verify(token, process.env.SECRET_KEY_FOR_AUTH)
            return payload
        }
        catch (error) {
            throw error
        }
    }
    static verifyWithCookie(req, resp, next) {
        try {
            const token = req.cookies[process.env.COOKIE_NAME_AUTH]
            if (!token) {
                throw new UnAuthorizedError("Not Authorized")
            }
            return JWTMiddleware.verify(token)
        } catch (error) {
            next(error)
        }
    }
    static verifyAdminWithCookie(req, resp, next) {
        try {
            let payload = JWTMiddleware.verifyWithCookie(req, resp, next)
            if (payload.roleid!=1) {
                throw new UnAuthorizedError("Not admin")
            }
            next()
        } catch (error) {
            next(error)
        }
    }
    static verifyEmployeeWithCookie(req, resp, next) {
        try {
            let payload = JWTMiddleware.verifyWithCookie(req, resp, next)
            if (payload.roleid!=2) {
                throw new UnAuthorizedError("Not Employee")
            }
            next()
        } catch (error) {
            next(error)
        }
    }
    static verifyAgentWithCookie(req, resp, next) {
        try {
            let payload = JWTMiddleware.verifyWithCookie(req, resp, next)
            if (payload.roleid!=3) {
                throw new UnAuthorizedError("Not Agent")
            }
            next()
        } catch (error) {
            next(error)
        }
    }
    static verifyCustomerWithCookie(req, resp, next) {
        try {
            let payload = JWTMiddleware.verifyWithCookie(req, resp, next)
            if (payload.roleid!=4) {
                throw new UnAuthorizedError("Not Customer")
            }
            next()
        } catch (error) {
            next(error)
        }
    }
    static authenticateEither(middleware1, middleware2) {
        return function (req, resp, next) {
            try {
                middleware1(req, resp, error => {
                    if (error instanceof UnAuthorizedError) {
                        middleware2(req, resp, next);
                    } else {
                        next(error);
                    }
                });
            } catch (error) {
                next(error);
            }
        };
    }
}
    


module.exports = JWTMiddleware
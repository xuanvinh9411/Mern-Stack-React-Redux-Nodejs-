const { check, validationResult } = require('express-validator')
const { login } = require('../service/auth.service');
const { Ok , CREATED , SuccessResponse } = require('../core/success.response')
const { ForbiddenError } = require('../core/error.response')
class AuthController {
    login = async (req, res, nest) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) throw new  ForbiddenError('Validation login Failed')

        new CREATED({
            msg : '  successfully created user',
            metadata :await  login(req.body)
        }).send(res)
    }
}

module.exports  = new AuthController();
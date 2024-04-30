const { check, validationResult } = require('express-validator')
const { createUser } = require('../service/user.service');
const { Ok , CREATED , SuccessResponse } = require('../core/success.response')
const { ForbiddenError } = require('../core/error.response')
class UserController {
    signup = async (req, res, nest) => {
        const errors = validationResult(req);
        console.log(`errors`,errors)
        if (!errors.isEmpty()) throw new  ForbiddenError('Validation user Failed')

        new CREATED({
            msg : '  successfully created user',
            metadata :await  createUser(req.body)
        }).send(res)
    }
}

module.exports  = new UserController();
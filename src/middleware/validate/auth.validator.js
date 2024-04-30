const { check  } = require('express-validator')
module.exports = {
    validateLogin : [
        check('email','please include a valid email').isEmail(),
        check('password','please include password').isLength({min : 6}),
    ]
}
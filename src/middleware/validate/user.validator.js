const { check  } = require('express-validator')
module.exports = {
    validateCreateUser : [
        check('email','please include a valid email').isEmail(),
        check('name','please include a valid email').not().isEmpty(),
        check('password','please enter password with 6 and more characters').isLength({min : 6}),
    ],
}
const express = require('express')
const router = express.Router()
const ctrlAuth = require('../../controller/auth.controller')
const { validateLogin} = require('../../middleware/validate/auth.validator')
const asyncHandler = require('../../helpers/asyncHandler')

//@router   Get api/users
//@desc     Test router
//@access  Public
router.post('/login', validateLogin, asyncHandler(ctrlAuth.login));

module.exports = router
const express = require('express')
const router = express.Router()
const { validateCreateUser } = require('../../middleware/validate/user.validator')
const ctrlUser = require('../../controller/user.controller')
const asyncHandler = require('../../helpers/asyncHandler')
//@router   Get api/users
//@desc     Test router
//@access  Public
router.post('/', validateCreateUser, asyncHandler(ctrlUser.insertUser));

module.exports = router
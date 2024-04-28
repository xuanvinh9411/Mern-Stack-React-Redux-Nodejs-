const express = require('express')
const router = express.Router()

//@router   Get api/users
//@desc     Test router
//@access  Public
router.get('/', (req,res) => res.send('user router'));

module.exports = router
const { createOneUser, findOneUserByEmail } = require('../models/repositories/user.repo');
const {
    BadRequestError,
    AuthFailureError,
    ForbiddenError
} = require('../core/error.response')

const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');

const login = async (body) => {
    const { email, password } = body

    const user = await findOneUserByEmail(email)
    if (!user) throw new BadRequestError(`not found email: ${email}`)

    const match = bcrypt.compare(password, user.password)
    if (!match) throw new BadRequestError(`password mismatch`)


}

module.exports = {
    login
}
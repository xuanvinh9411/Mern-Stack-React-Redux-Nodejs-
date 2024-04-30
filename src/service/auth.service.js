const { createOneUser, findOneUserByEmail } = require('../models/repositories/user.repo');
const { getIntoData } = require('../utils/index');
const {
    BadRequestError,
    AuthFailureError,
    ForbiddenError
} = require('../core/error.response')
const { createKeyTokenPair } = require('../auth/auth');

const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');

const login = async (body) => {
    const { email, password } = body

    const user = await findOneUserByEmail(email)
    if (!user) throw new BadRequestError(`not found email: ${email}`)

    const match = bcrypt.compare(password, user.password)
    if (!match) throw new BadRequestError(`password mismatch`)

    const privateKey = crypto.randomBytes(64).toString('hex');
    const publicKey = crypto.randomBytes(64).toString('hex');
    const { accceptToken, refreshToken } = await createKeyTokenPair({ email: body.email, name: user.name, id: user._id }, publicKey, privateKey)
    await createKeyToken({ userId: user._id, refreshToken, publicKey, privateKey })

    return {
        code: 200,
        metadata:
        {
            user: getIntoData({ fields: ['email', 'name', '_id'], object: user }),
            token: accceptToken
        }

    }

    module.exports = {
        login
    }
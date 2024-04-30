const JWT = require('jsonwebtoken');
const { AuthFailureError } = require('../core/error.response')
const { findOneByUserId} = require('../models/repositories/keytoken.repo')
cons

const createKeyTokenPair = async (payload,publicKey,privateKey) => {

    const accceptToken = await JWT.sign(payload,publicKey,{expiresIn: '2 day'});

    const refreshToken = await JWT.sign(payload,privateKey,{expiresIn : '7 day'})

    return { accceptToken, refreshToken}
}

const authenticate = async (req, res, next) => {
try {
    const userId =req.header.userId 
    const user = await findUserById(userId)
    if(!user) throw new AuthFailureError(`userId not found`);

    const accesstoken =req.header.authorization 
    if(!accesstoken) throw new AuthFailureError(`token not found`);

    const keyStore = await findOneByUserId(userId)
    if(!keyStore) throw new AuthFailureError(`keyStore not found`);

        //check refresh token
        if(req.headers.refreshToken)
            try {
                const refreshToken = req.headers.refreshToken
                const decodeUser = JWT.verify( refreshToken,keyStore.privateKey)
                if(userId !== decodeUser.userId) throw new AuthFailureError('Invanlid userId');
                req.keyStore = keyStore
                req.user = decodeUser
                req.refreshToken = refreshToken
                return next()
            } catch (error) {
                throw error
            }

    // check authorization accesstoken
    const decodeUser =  JWT.verify(accesstoken,keyStore.publicKey)
    if(decodeUser.userId !== userId)throw new AuthFailureError(`userId not match`);
        req.keyStore = keyStore
        req.user = decodeUser
    return next()
} catch (error) {
    throw error
}
}

module.exports = {
    createKeyTokenPair,
    authenticate
}
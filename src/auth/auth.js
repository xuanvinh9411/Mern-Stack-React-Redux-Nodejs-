const JWT = require('jsonwebtoken');

const createKeyTokenPair = async (payload,publicKey,privateKey) => {

    const accceptToken = await JWT.sign(payload,publicKey,{expiresIn: '2 day'});

    const refreshToken = await JWT.sign(payload,privateKey,{expiresIn : '7 day'})

    return { accceptToken, refreshToken}
}

module.exports = {
    createKeyTokenPair
}
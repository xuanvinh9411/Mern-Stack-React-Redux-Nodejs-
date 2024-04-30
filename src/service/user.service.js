const { createOneUser, findOneUserByEmail } = require('../models/repositories/user.repo');
const { ForbiddenError } = require('../core/error.response');
const { createKeyTokenPair } = require('../auth/auth');
const {createKeyToken} = require('./keytoken.service')
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const createUser = async (body) => {

    let user = await findOneUserByEmail(body.email)
    if (user) throw new ForbiddenError(`Email existing`)

    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(body.password, salt)

    user = await  createOneUser({...body,password: password});
 

    const privateKey = crypto.randomBytes(64).toString('hex') ;
    const publicKey = crypto.randomBytes(64).toString('hex') ;
    const {accceptToken,refreshToken} = await createKeyTokenPair({email:body.email,name:user.name,id:user._id},publicKey,privateKey)
   await  createKeyToken({userId:user._id,refreshToken,publicKey,privateKey})
    return accceptToken; 
}

module.exports = {
    createUser
}
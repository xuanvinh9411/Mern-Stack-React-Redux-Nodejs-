const { createOneUser, findOneUserByEmail } = require('../models/repositories/user.repo');
const { ForbiddenError } = require('../core/error.response')
const KeyTokenModel = require('../models/keytoken.model')

const createKeyToken = async ({userId, publicKey, privateKey, refreshToken}) => {
    const filter = {userId }
    const  update = { publicKey, privateKey, refreshToken,$push : {refreshTokenUse : refreshToken}}    
    const option  = {upsert : true, new : true}
    const keytoken = await KeyTokenModel.findOneAndUpdate(filter,update,option)
    return keytoken?.publicKey ? keytoken.publicKey : null ;
}

module.exports = {
    createKeyToken
}
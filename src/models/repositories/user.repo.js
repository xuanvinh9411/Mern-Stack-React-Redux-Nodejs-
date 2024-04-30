const userModel = require('../user.model');
const createOneUser = async (body) => {
    return userModel.create(body);
}

const findOneUserByEmail = async (email) => {
    return await userModel.findOne({email});
}

module.exports = {
    createOneUser,
    findOneUserByEmail
}
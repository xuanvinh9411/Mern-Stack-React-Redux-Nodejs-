const userModel = require('../user.model');
const createOneUser = async (body) => {
    return userModel.create(body);
}

const findOneUserByEmail = async (email) => {
    return await userModel.findOne({email});
}

const findUserById = async (_id) => {
    return await userModel.findById(_id);
}

module.exports = {
    createOneUser,
    findOneUserByEmail,
    findUserById
}
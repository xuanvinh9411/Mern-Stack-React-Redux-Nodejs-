const KeytokenModel = require('../keytoken.model');

const findOneByUserId = async (userId) => {
    return await KeytokenModel.findOne({userId});
}

module.exports = {
    findOneByUserId,
}
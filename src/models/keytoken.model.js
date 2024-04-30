const mongoose = require("mongoose");
const KeytokenSchema = new mongoose.Schema({
    userId : {
        type : String,
        required : true
    },
    privateKey : {
        type : String,
        required : true,
    },
    publicKey : {
        type : String,
        required : true,
    },
    refreshToken : {
        type : String,
        required : true,
    },
    refreshTokenUse :{
        type : Array,
    },
    date : {
        type : Date,
        default : Date.now
    }
})
module.exports = mongoose.model('keytoken',KeytokenSchema)
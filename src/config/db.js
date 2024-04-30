const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

class database {
    constructor() {
        this.connectDB()
    }
    
        //connect
        connectDB(type = 'mongodb'){
            if(1 === 1){
                // mongoose.set('debug',true);
                // mongoose.set('debug',{color : true});
            }
            console.log(`bd`,db)
            mongoose
                .connect(db,{})
                .then(_ => console.log(`Connect Mongodb Success`))
                .catch(err => console.error(`Erro Connect!`,err))
        }       
       static getInstance() {
            if(!database.init){
                database.init = new database
            }   
            return database.init
       }
}

const instanceMongoDB =  database.getInstance()
module.exports =  instanceMongoDB
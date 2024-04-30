
const _ = require('lodash')
const mongoose = require('mongoose')

const getIntoData = ({ fields = [],object = {}}) =>{
    return _.pick(object,fields)
}

module.exports = {
    getIntoData      
}
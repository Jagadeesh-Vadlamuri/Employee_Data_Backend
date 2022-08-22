const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    name: {
        type: String
    },
    location:{
        type: String
    },
    age:{
        type: Number
    },
    designation:{
        type: String
    },
    

})

const dataModel = mongoose.model('employee', dataSchema);

module.exports = dataModel;
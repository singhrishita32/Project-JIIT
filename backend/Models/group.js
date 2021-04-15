const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    id: {
        type: String,
        trim: true
    },
    mentor: {
        name: {
            type: String
        },
        email: {
            type: String
        }
    },
    
    students: [{
        name: {
            type: String
        },
        email: {
            type: String
        }
    }],
    
    supervisors: [{
        name: {
            type: String
        },
        email: {
            type: String
        }
    }],
    fields: { 
        title: {
            type: String
        },
        description: {
            type: String
        },
        report: {
            data: Buffer,
            contentType:String
        }
    },
    deadlines: {
        title: {type: Date},
        description: { type: Date },
        report:{type :Date}
    }
})


module.exports = mongoose.model("Group", groupSchema);
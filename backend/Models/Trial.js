const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    title: {
        type:String
    },
    photo: {
        data: Buffer,
        contentType: String
    }
})


module.exports = mongoose.model("Trial", userSchema);
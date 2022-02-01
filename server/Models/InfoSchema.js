const mongoose = require("mongoose");

const InfoSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
    },
    MobNum: {
        type: String,
        required: true,
    },
    Date: {
        type: String,
        required: true
    }
});

const Info = mongoose.model('Info',InfoSchema);

module.exports = Info;
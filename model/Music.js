const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    author: {
        trype: String,
        require: true,
    },
    linkImage: {
        trype: String,
        require: true,
    },
    linkMusic: {
        trype: String,
        require: true,
    }
});

module.exports = mongoose.model("Music", musicSchema);
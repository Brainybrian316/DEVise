const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || process.env.MY_CONNECTION, {
});

module.exports = mongoose.connection;
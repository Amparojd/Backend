
const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

mongoose.connect(URI, {
    UseNewUrlParser: true,
    UseUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", ()=>{console.log("Is connected");});

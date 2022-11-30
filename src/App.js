
const express = require("express");
const cors = require("cors");

const App = express();
//Settings
App.set("port", process.env.PORT || 5000);
//Middle wares
App.use(cors());
App.use(express.json());
//Routes
App.use('/api/notes', require("./routes/note"));

module.exports= App;
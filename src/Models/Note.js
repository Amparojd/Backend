const {Schema, model} = require("mongoose");

const NoteSchema =new Schema({
    userId: String,
    title: String,
    Body: String,
}, {
    timestamps: true,
});


module.exports = model("note", NoteSchema);
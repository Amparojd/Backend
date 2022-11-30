const {Router} = require ("express");

const {getAllNotes, createNote, deleteNote, updateNote, getNote} = require("../Controllers/NoteController");
const router = Router();

router.route("/").get(getAllNotes).post(createNote);

router.route("/:id").get(getNote).delete(deleteNote).put(updateNote);
//get=obtener
//delete=borrar
//put=modificar
//post=enviar

module.exports = router;
const fs = require("fs");
const path = require("path");

module.exports = function(app) {
    fs.readFile(path.join(__dirname, "../db/db.json"), function(err, data) {
        if (err) throw err;
        let notes = JSON.parse(data);
    
        app.get("/api/notes", function(req, res) {
            res.json(notes);
        });

        app.post("/api/notes", function(req, res) {
            const newNote = req.body;

            newNote.id = newNote.title.replace(/\s+/g, "").toLowerCase();

            notes.push(newNote);

            res.json(newNote);
        });

        app.get("/api/notes/:id", function(req, res) {
            for(let i = 0; i < notes.length; i++) {
                if(req.params.id === notes[i].id) {
                    return res.json(notes[i]);
                }
            }

            return res.json(false);
        });

        app.delete("/api/notes/:id", function(req, res) {
            for(let i = 0; i < notes.length; i++) {
                if(req.params.id === notes[i].id) {
                    notes.splice(i, 1);
                }
            }
        });
    });
}
// Dependencies
const fs = require("fs");
const path = require("path");

// ROUTING
module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        const db = fs.readFile("../db/db.json", (err) => err ? console.error(err) : console.log(db));
        res.json(db);
    });

    app.post("/api/notes", function(req, res) {
        const db = fs.readFile("../db/db.json", (err) => err ? console.error(err) : console.log(db));
        db.push(req);
        fs.writeFile("../db/db.json", db, (err) => err ? console.error(err) : console.log("Note added"));
        res.json(db);
    });
}

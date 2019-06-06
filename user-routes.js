"use strict";

const express = require("express"); // imports express module
const router = express.Router();  // Router has to be capital

// GET - working
router.get("/users", (req, res) => { // read & return data from db (hero)
            res.send("Getting all users from the database.");
    });


// POST - working
router.post("/users", (req, res) => { // adds new villain to db
        // res.status(201); // 201 Created
        console.log(req.body); // console log of data sent
        res.send("Added a new user to the database.");
    });

// PUT - working
router.put("/users/:id", (req, res) => { // updates/alters villain name
    console.log(req.body); // logs the data sent
    console.log(req.params.id); // logs id sent
    // res.status(204);
    res.send("Updated a user from the database.");
    });


//Delete - working
router.delete("/users/:id", (req, res) => {
    console.log(req.params.id); // logs deleted id
    // res.status(204); // No Content
    res.send("Deleted a user from the database.");
});
    
    
module.exports = router;

/**
 * Sample JSON for testing purposes:
 * 
 * {
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}
 */
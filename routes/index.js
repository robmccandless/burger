const connection = require("../db/connection");
module.exports = (app) => {
    app.get("/", (req, res) => {
        connection.query("SELECT * FROM burger", function(err, data) {
            if (err) {
                return res.status(500).end();
            }

            console.log(data);
            res.render("All_burger", { burgers: data });
        });


    });

    app.get("/about", (req, res) => {
        const students = [{ name: "Justin" }, { name: "Robert" }]
        res.render("about", { students })
    });

    app.get("/burger", (req, res) => {
        db.User.findAll().then(response => {
            res.render("burger", { response })
        })
    });


    // Show the user the individual quote and the form to update the quote.
    app.get("/:id", function(req, res) {
        connection.query("SELECT * FROM burger where id = ?", [req.params.id], function(err, data) {
            if (err) {
                return res.status(500).end();
            }

            console.log(data);
            res.render("single-quote", data[0]);
        });
    });

    app.post("/api/burger", function(req, res) {
        connection.query("INSERT INTO burger (burger_name, devour) VALUES (?, ?)", [req.body.burger_name, req.body.devour], function(
            err,
            result
        ) {
            if (err) {
                // If an error occurred, send a generic server failure
                return res.status(500).end();
            }

            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
    });

    app.delete("/api/burger/:id", function(req, res) {
        connection.query("DELETE FROM burger WHERE id = ?", [req.params.id], function(err, result) {
            if (err) {
                // If an error occurred, send a generic server failure
                return res.status(500).end();
            } else if (result.affectedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        });
    });

    // Update a quote by an id and then redirect to the root route.
    app.put("/api/burger/:id", function(req, res) {
        connection.query(
            "UPDATE burger SET burger_name = ?, devour = ? WHERE id = ?", [req.body.burger_name, req.body.devour, req.params.id],
            function(err, result) {
                if (err) {
                    // If an error occurred, send a generic server failure
                    return res.status(500).end();
                } else if (result.changedRows === 0) {
                    // If no rows were changed, then the ID must not exist, so 404
                    return res.status(404).end();
                }
                res.status(200).end();

            }
        );
    });

}
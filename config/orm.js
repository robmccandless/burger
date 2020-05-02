var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAll: function() {
        var queryString = "SELECT * FROM burger";
        // array might not be necessary after querystings
        connection.query(queryStrings, [], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function() {



    },
    updateOne: function() {},

    // Start here:

    selectWhere: function(tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryStrings, [tableInput, colToSearch, valOfCol], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    selectAndOrder: function(whatToSelect, table, orderCol) {
        var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        console.log(queryString);
        connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
        var queryString =
            "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
        selectParties: function(table, column, type) {
            var queryStrings = "seclect from ?? wherfe ?? ?";, (table, column, type),



        }
        connection.query(
            queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
            function(err, result) {
                if (err) throw err;
                console.log(result);
            }
        );
    }
};

module.exports = orm;

var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAll: function() {
        var queryString = "SELECT * FROM burger";
        // array might not be necessary after querystings
        connection.query(queryStrings, [], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function() {

        // make a query string using what we did in workbench as an example
        // insert into burger (burger_name, devour) values ("zintis", false)
        //connection.query(theNewQuery, [], function(response){
        //console.log(response)
        //}

    },
    updateOne: function(burgerId) {},

    //make a query that updates a burger based on the number
    // Update devour = true WHERE id = ??
    // connection.query( theNewQuery, [burderId], function(){//callback}


    selectWhere: function(tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryStrings, [tableInput, colToSearch, valOfCol], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    selectAndOrder: function(whatToSelect, table, orderCol) {
        var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        console.log(queryString);
        connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
        var queryString =
            "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
        selectParties: function(table, column, type) {
            var queryStrings = "seclect from ?? wherfe ?? ?";, (table, column, type),



        }
        connection.query(
            queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
            function(err, result) {
                if (err) throw err;
                console.log(result);
            }
        );
    }
};

module.exports = orm;
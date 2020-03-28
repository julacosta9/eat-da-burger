const connection = require("./connection.js");

const orm = {
    selectall: function(tableName) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    insertOne: function(tableName, burger_name, devoured) {
        const queryString = "INSERT INTO ?? (burger_name, devoured)";
        queryString += "VALUES (?, ?)";
        connection.query(queryString, [tableName, burger_name, devoured], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    updateOne: function(tableName, id, devoured) {
        const queryString = "UPDATE ?? SET devoured=? WHERE id=?";
        connection.query(queryString, [tableName, devoured, id], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
}

module.exports = orm;

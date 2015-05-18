var mongo = require("mongoskin");
var db = mongo.db("mongodb://localhost:27017/leaveSystemData");

exports.authenticatLeave = function(username, leaveCollection, callback) {
    db.collection(leaveCollection).findOne({
        "username": username
    }, function(error, user) {
        callback(error, user);
        db.close();
    });
}

exports.applyLeave = function(leavedate, callback) {
    db.collection("").insert(leavedate, function(error, result) {
        callback(error, result);
        db.close();
    });
}

exports.cancilLeave = function(leavedate, callback) {
    db.collection("").insert(leavedate, function(error, result) {
        callback(error, result);
        db.close();
    });
}
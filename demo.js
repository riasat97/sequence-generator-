var mongoose = require('mongoose');
var User = require('./models/userModel');
sequence = require('./sequence').sequenceGenerator("dishid");
mongoose.connect('mongodb://localhost/nodeGeek');
var db = mongoose.connection;

db.on('error', function (err) {
    console.log('Mongo connection error. Please check Mongo is running');
    console.log(err);
});
db.once('open', function () {
    console.log('MongoDb connected.');
});

addUser = function(){
    sequence.next(function(nextSeq){
        var userObj = {
            userid: nextSeq,
            fname: "riasat",
            lname: "raihan",
            password: "1234",
            email: "riasatraihan@gmail.com"
        };

        var user = new User(userObj);
        user.save(function(err){
            if(err) return console.log({message : "Error occured", error: err });

            //var response = {message: "New user created", data:user};
            //res.json(response)
            console.log({message: "New user created", data:user});
        });
    });
};
addUser();/**
 * Created by riasatraihan on 3/31/2016.
 */

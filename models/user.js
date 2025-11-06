const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

userSchema.plugin(passportLocalMongoose);
//ye plugin username and password, hash and salt fields ko add kr dega automatically userSchema me

const User = mongoose.model("User", userSchema);

module.exports = User;
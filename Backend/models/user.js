const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // unique helps to make querying of email faster by creating an index, does not work as a unique property
  password: { type: String, required: true, minlength: 6 },
  image: { type: String, required: true },
  places: [{ type: mongoose.Types.ObjectId, required: true, ref: "Place" }], // store it in array to tell mongoose that we can have multiple places
});

userSchema.plugin(uniqueValidator); // used to check whether the emails are unique

module.exports = mongoose.model("User", userSchema); // collection will be users

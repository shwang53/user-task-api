// Load required packages
var mongoose = require('mongoose');

// Define our user schema
var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    pendingTasks: [String],
    dateCreated:{
      type: String,
      default: Date.now
    }
});

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);

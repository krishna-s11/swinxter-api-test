const mongoose = require("mongoose");

const adminUserSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    profile: {type: String},
    password: {type: String},
    role: {type: String, default: "superadmin"},
    createdAt: {type: Date, default: Date.now},
});

const adminUser = mongoose.model("adminUser", adminUserSchema);

module.exports = adminUser;
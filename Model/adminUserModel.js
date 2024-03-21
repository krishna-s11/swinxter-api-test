const mongoose = require("mongoose");

const adminUserSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    profile: {type: String},
    password: {type: String},
    role: {type: String, default: "superadmin"},
    createdAt: {type: Date, default: Date.now},
    events: {type: Boolean, default: false},
    clubs: {type: Boolean, default: false},
    situationships: {type: Boolean, default: false},
    users: {type: Boolean, default: false},
    admin_users: {type: Boolean, default: false},
});

const adminUser = mongoose.model("adminUser", adminUserSchema);

module.exports = adminUser;
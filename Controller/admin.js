const userModel = require("../Model/usersModel");
const clubModel = require("../Model/clubModel");
const eventModel = require("../Model/event");
const travelModel = require("../Model/travel");
// const userModel = require("../Model/adminUserModel");
const adminUser = require("../Model/adminUserModel");

module.exports = {
  async get_users(req, res) {
    try {
    } catch (e) {
      return res.status(500).send(e);
    }
  },
  async login(req,res){
    try {
      const {email,password} = req.body;
      console.log(email,password);
      const data = await adminUser.find({email:email,password:password});
      console.log(data)
      if(!data){
        return res.status(400).send("something went wrong");
      }else{
        return res.status(200).send(data);
      }
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  }
};

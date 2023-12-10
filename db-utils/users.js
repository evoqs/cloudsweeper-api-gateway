const mongoose = require('mongoose');
const db = require("../models");

const User = db.users;

const findUser = async (email) => {
  return await User.find({username: email})
}

const findUserByID = async (id) => {
  return await User.find({_id: id}, {name: 1, username: 1, _id: 1})
}

const createUser = async (username, password) => {
  return await User.create({name: username, username: username, password})
}

module.exports = {
  findUser,
  findUserByID,
  createUser
}
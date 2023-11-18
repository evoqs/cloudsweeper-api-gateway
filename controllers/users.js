const bcrypt = require('bcrypt');

const userDB = require('../db-utils/users');

const registerUser = async function (req, res) {
	let hashedPwd = await bcrypt.hash(req.body.password, 10)
	res.send({message: 'creating user'})
}

const userProfile = async function(req, res) {
	const users = await userDB.findUserByID(req.headers.user)
	if (users.length == 0) {
		res.send({})
	} else {
		let user = users[0]
		user = JSON.stringify(user)
		user = JSON.parse(user)
		res.send({id: user._id, name: user.name, username: user.username})
	}
}

module.exports = {
	userProfile,
	registerUser
}
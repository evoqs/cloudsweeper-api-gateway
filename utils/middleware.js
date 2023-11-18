const jwt = require("jsonwebtoken");

const authenticate = async function (req, res, next) {
	const decoded = jwt.decode(req.headers.authorization);
	req.headers.user = decoded.id
	next()
}

module.exports = {
	authenticate
}
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const userDB = require('../db-utils/users');

const login = async function (req, res) {
  const { username, password } = req.body;
  const userEntry = await userDB.findUser(username);
  if (userEntry.length == 0) {
    res.status(401).send({msg: 'Incorrect credentials'})
  }
  else {
    if (await bcrypt.compare(password, userEntry[0].password)) {

      const accessToken = jwt.sign({username, role: 'admin', id: userEntry[0]._id}, "TEST_SECRET_FOR_ACCESS_TOKEN", {expiresIn: '1000m'});
      const refreshToken = jwt.sign({username}, 'TEST_REFRESH_TOKEN_SECRET', {expiresIn: '1d'});
      res.cookie('jwt', refreshToken, {httpOnly: true, sameSite: 'None', secure: false, maxAge: 24*60*60*1000})
      res.json({accessToken})
    }
    else {
      res.status(401).send({msg: 'Incorrect credentials'})
    }
  }
}

module.exports = {
  login
}

let mongoDetails = { 
	host: 'localhost',
	port: '27017',
	dbname: '',
	user: '',
	pass: ''
}

let variables = ['host', 'port', 'dbname', 'user', 'pass']
variables.forEach((env) => {
	mongoDetails[env] = process.env[env] ? process.env[env] : mongoDetails[env]
})

let url = `mongodb://${mongoDetails.host}:${mongoDetails.port}/${mongoDetails.dbname}`

if (mongoDetails.user != '' && mongoDetails.pass != '') {

}

module.exports = {
	url: url
};
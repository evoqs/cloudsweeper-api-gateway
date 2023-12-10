const userDB = require('../db-utils/users');
const axios = require('axios');

const createPolicy = async function(req, res, next) {
	try {
		
		next()
	} catch (e) {

	}
}

const getTunnel = async function(req, res) {
	try {
		let url = req.url
		console.log(url)
		if(url == "/pipelines" || url == "/policies" || url == "/cloudaccounts") {
			url = '/accounts/' + req.headers.user + req.url
		}
		console.log("http://localhost:8000" + url)
		const response = await axios.get("http://" + req.host + ":8000" + url);
		const responseData = response.data;
		res.send(responseData);			
	} catch (e) {
		// console.log(e)
		res.send("error")
	}


}

const postTunnel = async function(req, res) {
	let headers = req.headers
	try {
		req.body.accountid = headers.user
		const response = await axios.post("http://" + req.host + ":8000" + req.url, req.body);
		const responseData = response.data;
		res.send(responseData);
	} catch (e) {
		console.log(e)
		res.send("error")
	}


}

const putTunnel = async function(req, res) {
	const response = await axios.put("http://" + req.host  + ":8000" + req.url);
	const responseData = response.data;
	res.send(responseData);

}

const deleteTunnel = async function(req, res) {
	const response = await axios.delete("http://" + req.host  + ":8000" + req.url);
	const responseData = response.data;
	res.send(responseData);

}

const dummyJson = function (req, res) {
	res.send({ec2: {filterOptions: ['cpu', 'launchtime', 'filter1', 'filter2'],filterDetails: {'cpu': {displayName: 'CPU', filterList: ['filter1', 'filter2', 'filter3'], filterInfo: {filter3: {displayName: 'Filter3', type: 'freetext'}, filter2: {displayName: 'Filter2', type: 'dropdown', options: ['<', '<=','>','>=','=']}, filter1: {displayName: 'Filter1', type: 'dropdown', options: ['opt1', 'opt2', 'opt3']}}}}}, s3: {filterOptions: ['name', 'createdBy'],filterDetails: {'name': {displayName: 'Name',filterList: ['name', 'dummyKey'],filterInfo: {'dummyKey': {displayName: 'Dummy Key', type: 'int', "validations": {"max": 100, "min": 10}}, 'name': {displayName: 'Name',type: 'freetext'}}},'createdBy': {displayName: 'Created By',filterList: ['user'],filterInfo: {'user': {displayName: 'User',type: 'freetext'}}		}}}})
}

module.exports = {
	dummyJson,
	getTunnel,
	postTunnel,
	putTunnel,
	deleteTunnel,
	createPolicy
}
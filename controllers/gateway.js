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

const getRegions = function (req, res) {
	res.send({"regions": [{"Endpoint":"ec2.ap-south-2.amazonaws.com","OptInStatus":"not-opted-in","RegionName":"ap-south-2"},{"Endpoint":"http://ec2.ap-south-1.amazonaws.com ","OptInStatus":"opt-in-not-required","RegionName":"ap-south-1"},{"Endpoint":"http://ec2.eu-south-1.amazonaws.com ","OptInStatus":"not-opted-in","RegionName":"eu-south-1"},{"Endpoint":"ec2.eu-south-2.amazonaws.com","OptInStatus":"not-opted-in","RegionName":"eu-south-2"},{"Endpoint":"ec2.me-central-1.amazonaws.com","OptInStatus":"not-opted-in","RegionName":"me-central-1"},{"Endpoint":"ec2.il-central-1.amazonaws.com","OptInStatus":"not-opted-in","RegionName":"il-central-1"},{"Endpoint":"http://ec2.ca-central-1.amazonaws.com ","OptInStatus":"opt-in-not-required","RegionName":"ca-central-1"},{"Endpoint":"http://ec2.eu-central-1.amazonaws.com ","OptInStatus":"opt-in-not-required","RegionName":"eu-central-1"},{"Endpoint":"ec2.eu-central-2.amazonaws.com","OptInStatus":"not-opted-in","RegionName":"eu-central-2"},{"Endpoint":"http://ec2.us-west-1.amazonaws.com ","OptInStatus":"opt-in-not-required","RegionName":"us-west-1"},{"Endpoint":"http://ec2.us-west-2.amazonaws.com ","OptInStatus":"opt-in-not-required","RegionName":"us-west-2"},{"Endpoint":"http://ec2.af-south-1.amazonaws.com ","OptInStatus":"not-opted-in","RegionName":"af-south-1"},{"Endpoint":"http://ec2.eu-north-1.amazonaws.com ","OptInStatus":"opt-in-not-required","RegionName":"eu-north-1"},{"Endpoint":"http://ec2.eu-west-3.amazonaws.com ","OptInStatus":"opt-in-not-required","RegionName":"eu-west-3"},{"Endpoint":"http://ec2.eu-west-2.amazonaws.com ","OptInStatus":"opt-in-not-required","RegionName":"eu-west-2"},{"Endpoint":"http://ec2.eu-west-1.amazonaws.com ","OptInStatus":"opt-in-not-required","RegionName":"eu-west-1"},{"Endpoint":"http://ec2.ap-northeast-3.amazonaws.com ","OptInStatus":"opt-in-not-required","RegionName":"ap-northeast-3"},{"Endpoint":"http://ec2.ap-northeast-2.amazonaws.com ","OptInStatus":"opt-in-not-required","RegionName":"ap-northeast-2"},{"Endpoint":"http://ec2.me-south-1.amazonaws.com ","OptInStatus":"not-opted-in","RegionName":"me-south-1"},{"Endpoint":"http://ec2.ap-northeast-1.amazonaws.com ","OptInStatus":"opt-in-not-required","RegionName":"ap-northeast-1"},{"Endpoint":"http://ec2.sa-east-1.amazonaws.com ","OptInStatus":"opt-in-not-required","RegionName":"sa-east-1"},{"Endpoint":"http://ec2.ap-east-1.amazonaws.com ","OptInStatus":"not-opted-in","RegionName":"ap-east-1"},{"Endpoint":"http://ec2.ap-southeast-1.amazonaws.com ","OptInStatus":"opt-in-not-required","RegionName":"ap-southeast-1"},{"Endpoint":"http://ec2.ap-southeast-2.amazonaws.com ","OptInStatus":"opt-in-not-required","RegionName":"ap-southeast-2"},{"Endpoint":"http://ec2.ap-southeast-3.amazonaws.com ","OptInStatus":"not-opted-in","RegionName":"ap-southeast-3"},{"Endpoint":"ec2.ap-southeast-4.amazonaws.com","OptInStatus":"not-opted-in","RegionName":"ap-southeast-4"},{"Endpoint":"http://ec2.us-east-1.amazonaws.com ","OptInStatus":"opt-in-not-required","RegionName":"us-east-1"},{"Endpoint":"http://ec2.us-east-2.amazonaws.com ","OptInStatus":"opt-in-not-required","RegionName":"us-east-2"}]})
}

const dummyJson = function (req, res) {
	res.send({"ebs": {"filterOptions": ["volumeId", "volumeType", "tag", "state", "createTime", "volume-age", "state-age"],"filterDetails": {"volumeId": {"displayName": "Volume ID","filterList": ["id"],"filterInfo": {"id": {"displayName": "ID","type": "freetext"}}},"volumeType": {"displayName": "Volume Type","filterList": ["type"],"filterInfo": {"type": {"displayName": "Type","type": "freetext"}}},"tag": {"displayName": "Tag","filterList": ["key", "value"],"filterInfo": {"key": {"displayName": "Key","type": "freetext"},"value": {"displayName": "Value","type": "freetext"}}},"state": {"displayName": "State","filterList": ["in-use", "available"],"filterInfo": {"in-use": {"displayName": "In Use","type": "boolean"},"available": {"displayName": "Available","type": "boolean"}}},"createTime": {"displayName": "Create Time","filterList": ["after", "before"],"filterInfo": {"after": {"displayName": "After","type": "date"},"before": {"displayName": "Before","type": "date"}}},"volume-age": {"displayName": "Volume Age","filterList": ["maxAge", "minAge"],"filterInfo": {"maxAge": {"displayName": "Max Age","type": "int","validations": {"min": 0}},"minAge": {"displayName": "Min Age","type": "int","validations": {"min": 0}}}},"state-age": {"displayName": "State Age","filterList": ["maxAge", "minAge"],"filterInfo": {"maxAge": {"displayName": "Max Age","type": "int","validations": {"min": 0}},"minAge": {"displayName": "Min Age","type": "int","validations": {"min": 0}}}}}}, "ebssnapshot": {"filterOptions": ["snapshotId", "volumeId", "tag", "state", "startTime", "volume-age", "state-age"],"filterDetails": {"snapshotId": {"displayName": "Snapshot ID","filterList": ["id"],"filterInfo": {"id": {"displayName": "ID","type": "freetext"}}},"volumeId": {"displayName": "Volume ID","filterList": ["id"],"filterInfo": {"id": {"displayName": "ID","type": "freetext"}}},"tag": {"displayName": "Tag","filterList": ["key", "value"],"filterInfo": {"key": {"displayName": "Key","type": "freetext"},"value": {"displayName": "Value","type": "freetext"}}},"state": {"displayName": "State","filterList": ["completed", "pending", "error"],"filterInfo": {"completed": {"displayName": "Completed","type": "boolean"},"pending": {"displayName": "Pending","type": "boolean"},"error": {"displayName": "Error","type": "boolean"}}},"startTime": {"displayName": "Start Time","filterList": ["after", "before"],"filterInfo": {"after": {"displayName": "After","type": "date"},"before": {"displayName": "Before","type": "date"}}},"volume-age": {"displayName": "Volume Age","filterList": ["maxAge", "minAge"],"filterInfo": {"maxAge": {"displayName": "Max Age","type": "int","validations": {"min": 0}},"minAge": {"displayName": "Min Age","type": "int","validations": {"min": 0}}}},"state-age": {"displayName": "State Age","filterList": ["maxAge", "minAge"],"filterInfo": {"maxAge": {"displayName": "Max Age","type": "int","validations": {"min": 0}},"minAge": {"displayName": "Min Age","type": "int","validations": {"min": 0}}}}}}, "elasticip": {"filterOptions": ["allocationId", "associationId", "instanceId", "domain", "tag", "publicIp", "privateIpAddress", "networkInterfaceId"],"filterDetails": {"allocationId": {"displayName": "Allocation ID","filterList": ["id"],"filterInfo": {"id": {"displayName": "ID","type": "freetext"}}},"associationId": {"displayName": "Association ID","filterList": ["id"],"filterInfo": {"id": {"displayName": "ID","type": "freetext"}}},"instanceId": {"displayName": "Instance ID","filterList": ["id"],"filterInfo": {"id": {"displayName": "ID","type": "freetext"}}},"domain": {"displayName": "Domain","filterList": ["vpc", "standard"],"filterInfo": {"vpc": {"displayName": "VPC","type": "boolean"},"standard": {"displayName": "Standard","type": "boolean"}}},"tag": {"displayName": "Tag","filterList": ["key", "value"],"filterInfo": {"key": {"displayName": "Key","type": "freetext"},"value": {"displayName": "Value","type": "freetext"}}},"publicIp": {"displayName": "Public IP","filterList": ["ip"],"filterInfo": {"ip": {"displayName": "IP","type": "freetext"}}},"privateIpAddress": {"displayName": "Private IP Address","filterList": ["ip"],"filterInfo": {"ip": {"displayName": "IP","type": "freetext"}}},"networkInterfaceId": {"displayName": "Network Interface ID","filterList": ["id"],"filterInfo": {"id": {"displayName": "ID","type": "freetext"}}}}}, "elb": {"filterOptions": ["loadBalancerName", "dnsName", "tag", "scheme", "instance", "subnet", "vpc", "listener"],"filterDetails": {"loadBalancerName": {"displayName": "Load Balancer Name","filterList": ["name"],"filterInfo": {"name": {"displayName": "Name","type": "freetext"}}},"dnsName": {"displayName": "DNS Name","filterList": ["name"],"filterInfo": {"name": {"displayName": "Name","type": "freetext"}}},"tag": {"displayName": "Tag","filterList": ["key", "value"],"filterInfo": {"key": {"displayName": "Key","type": "freetext"},"value": {"displayName": "Value","type": "freetext"}}},"scheme": {"displayName": "Scheme","filterList": ["internet-facing", "internal"],"filterInfo": {"internet-facing": {"displayName": "Internet Facing","type": "boolean"},"internal": {"displayName": "Internal","type": "boolean"}}},"instance": {"displayName": "Instance","filterList": ["id"],"filterInfo": {"id": {"displayName": "ID","type": "freetext"}}},"subnet": {"displayName": "Subnet","filterList": ["id"],"filterInfo": {"id": {"displayName": "ID","type": "freetext"}}},"vpc": {"displayName": "VPC","filterList": ["id"],"filterInfo": {"id": {"displayName": "ID","type": "freetext"}}},"listener": {"displayName": "Listener","filterList": ["port"],"filterInfo": {"port": {"displayName": "Port","type": "int","validations": {"min": 0}}}}}}, "ec2": {"filterOptions": ["instanceId", "instanceType", "tag", "state", "launchTime", "instance-age", "image-age", "instance-uptime", "state-age"],"filterDetails": {"instanceId": {"displayName": "Instance ID","filterList": ["id"],"filterInfo": {"id": {"displayName": "ID","type": "freetext"}}},"instanceType": {"displayName": "Instance Type","filterList": ["type"],"filterInfo": {"type": {"displayName": "Type","type": "freetext"}}},"tag": {"displayName": "Tag","filterList": ["key", "value"],"filterInfo": {"key": {"displayName": "Key","type": "freetext"},"value": {"displayName": "Value","type": "freetext"}}},"state": {"displayName": "State","filterList": ["running", "stopped"],"filterInfo": {"running": {"displayName": "Running","type": "boolean"},"stopped": {"displayName": "Stopped","type": "boolean"}}},"launchTime": {"displayName": "Launch Time","filterList": ["after", "before"],"filterInfo": {"after": {"displayName": "After","type": "date"},"before": {"displayName": "Before","type": "date"}}},"instance-age": {"displayName": "Instance Age","filterList": ["maxAge", "minAge"],"filterInfo": {"maxAge": {"displayName": "Max Age","type": "int","validations": {"min": 0}},"minAge": {"displayName": "Min Age","type": "int","validations": {"min": 0}}}},"image-age": {"displayName": "Image Age","filterList": ["maxAge", "minAge"],"filterInfo": {"maxAge": {"displayName": "Max Age","type": "int","validations": {"min": 0}},"minAge": {"displayName": "Min Age","type": "int","validations": {"min": 0}}}},"instance-uptime": {"displayName": "Instance Uptime","filterList": ["minUptime"],"filterInfo": {"minUptime": {"displayName": "Min Uptime","type": "int","validations": {"min": 0}}}},"state-age": {"displayName": "State Age","filterList": ["maxAge", "minAge"],"filterInfo": {"maxAge": {"displayName": "Max Age","type": "int","validations": {"min": 0}},"minAge": {"displayName": "Min Age","type": "int","validations": {"min": 0}}}}}}})
}

module.exports = {
	dummyJson,
	getTunnel,
	postTunnel,
	putTunnel,
	deleteTunnel,
	createPolicy,
	getRegions
}
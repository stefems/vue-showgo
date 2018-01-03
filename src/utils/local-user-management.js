const axios = require('axios');
const querystring = require('query-string');

const BASE_URL = 'http://localhost:3000';

function getLocalUser(pairs) {
	const url = `${BASE_URL}/api/user_changes/user`;
	let json_string = JSON.stringify(pairs);
	let query = "?access_refresh_pairs=" +  encodeURI(json_string);
	return axios.get(url + query);
}

export {getLocalUser}
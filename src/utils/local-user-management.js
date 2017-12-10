const axios = require('axios');
const querystring = require('query-string');

const BASE_URL = 'http://localhost:3000';

function getLocalUser(pairs) {
	console.log(pairs);
	const url = `${BASE_URL}/api/user_changes/user`;
	let json_string = JSON.stringify(pairs);
	let query = "?access_refresh_pairs=" +  encodeURI(json_string);
	// pairs.forEach( (pair, index) => {
	// 	query += "access_refresh_pairs["+index+"]={access_token:"+pair.access_token+""
	// });
	console.log(query);
	return axios.get(url + query);
	//
	// .then(response => {
	// 	console.log(response.data);
	// });
}

export {getLocalUser}
// function getPrivateStartupBattles() {
//   const url = `${BASE_URL}/api/battles/private`;
//   return axios.get(url).then(response => response.data);
// }

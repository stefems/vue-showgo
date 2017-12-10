<template>
	<!-- Pass user prop into router? -->
  <router-view/>
</template>

<script>
let local_user_management = require('./utils/local-user-management');
export default {
  name: 'app',
  methods: {
  	check_for_user: function() {
      let query = (new URL(document.location)).searchParams;
  		var token_pairs = [];
      //Look for the redirect's query string for user info
  		if (query.get("access_token") && query.get("refresh_token") ) {
  			token_pairs.push({ access_token: query.get("access_token"), refresh_token: query.get("refresh_token")});
  		}
  		//Look for localstorage for user info
  		if (localStorage.getItem("showgo_user") !== "undefined" && localStorage.getItem("showgo_user") !== null) {
  			token_pairs.push({ access_token: JSON.parse(localStorage.getItem("showgo_user")).access_token, refresh_token: JSON.parse(localStorage.getItem("showgo_user")).refresh_token});
  		}

  		if (token_pairs.length !== 0) {
          local_user_management.getLocalUser(token_pairs).then( (response) => {
            console.log(response);
            this.$router.push('/secret');
          });
  	  		//this.$router.push('secret');
	  	}
	  	else {
	  		console.log("no user, go to home");
	  		this.$router.push('/');
	  	}
  	}
  },
  created() {
    if (!this.$root.$data.logged_in) {
      this.check_for_user();
    }
  }
}
</script>

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
  		//Look for sessionStorage for user info
  		if (sessionStorage.getItem("showgo_user") !== "undefined" && sessionStorage.getItem("showgo_user") !== null) {
  			token_pairs.push({ access_token: JSON.parse(sessionStorage.getItem("showgo_user")).access_token, refresh_token: JSON.parse(sessionStorage.getItem("showgo_user")).refresh_token});
  		}

  		if (token_pairs.length !== 0) {
          local_user_management.getLocalUser(token_pairs).then( (response) => {
            if (!response.error) { 
              let user = response.data;
              this.$root.$data.logged_in = true;
              this.$root.$data.user = user;
              sessionStorage.setItem("showgo_user", JSON.stringify({access_token: user.spotify_access_token, refresh_token: user.spotify_refresh_token}));
              this.$router.push('/secret');
            }
            else {
              console.log("user acquisition error");
            }
            
          });
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

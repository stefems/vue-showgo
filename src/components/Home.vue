<template>
	<div>
		<!-- <h4>{{route}}</h4> -->
    <h5> Logged In: {{this.$root.$data.logged_in}} </h5>
    <router-link :to="'secret'">secret</router-link>
	 	<a href="http://localhost:3000/api/spotify_login/send_to_spotify_for_login">Log in with Spotify</a>
 	</div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  display: block;
  color: #42b983;
}
</style>

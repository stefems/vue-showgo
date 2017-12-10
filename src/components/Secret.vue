<template>
	<div>
		<h4>/secret</h4>
    <h5> Logged In: {{this.$root.$data.logged_in}} </h5>
    <router-link :to="'/'">Home</router-link>
 	</div>
</template>

<script>
export default {
  name: 'Secret'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

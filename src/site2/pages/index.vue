<template>
	<div>
		<h1>Heading for Template 2</h1>
		<p>The visited URL is: {{ url }}</p>
		<p><button @click="sayHello">Hello</button></p>
		<router-link to="/about">About page</router-link>
	</div>
</template>

<script>
let timer

export default {
	data() {
		return {
			url: this.$route.path
		}
	},
	methods: {
		sayHello() {
			window.alert('Hello!')
		}
	}
}
</script>

<style scoped>
h1 {
	color: green;
}
</style>
<script>
	import { onMount } from 'svelte';
	import { serverUrl, appId } from '$lib/env';
	import { login, logOut } from '$lib/MoralisUtil';
	import { currentUser } from '../stores';
	onMount(async () => {
		Moralis.start({ serverUrl, appId });
		let user = Moralis.User.current();
		currentUser.set(user);
	});
</script>

<style>
	#home {
		margin: 48px 0;
	}
</style>

<svelte:head>
	<title>Profile</title>
</svelte:head>

<div id="home">
	{#if $currentUser}
		<!-- <div class="text-center text-2xl">
			<strong style="color: green; text-align: center; ">Logged in successfully!</strong>
		</div>
		<br /> -->
		<div>
			<strong class="text-teal-300">Username:</strong>
			<span>{$currentUser.get('username')}</span>
		</div>
		<div>
			<strong class="text-teal-300">Address:</strong>
			<span>{$currentUser.get('ethAddress')}</span>
		</div>
		<div>
			<strong class="text-green-300">Created At:</strong>
			<span>{$currentUser.get('createdAt')}</span>
		</div>
		<div>
			<strong class="text-green-300">Updated At:</strong>
			<span>{$currentUser.get('updatedAt')}</span>
		</div>
		<button
			class="my-8 bg-purple-500 duration-700 ease-in-out hover:bg-purple-700 text-white text-center
			py-2 px-4 rounded"
			id="btn-logout"
			on:click={logOut}>
			Logout
		</button>
	{:else}
		<p>Please login.</p>
		<button
			class="m-auto bg-purple-500 duration-700 ease-in-out hover:bg-purple-700 text-white
			text-center py-2 px-4 rounded"
			id="btn-login"
			on:click={login}>
			Login
		</button>
	{/if}
</div>

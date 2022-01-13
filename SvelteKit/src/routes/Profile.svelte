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
		<p style="color: green;">Logged in successfully!</p>
		<div>
			<span>Username:</span>
			<span>{$currentUser.get('username')}</span>
		</div>
		<div>
			<span>Address:</span>
			<span>{$currentUser.get('ethAddress')}</span>
		</div>
		<div>
			<span>Created At:</span>
			<span>{$currentUser.get('createdAt')}</span>
		</div>
		<div>
			<span>Updated At:</span>
			<span>{$currentUser.get('updatedAt')}</span>
		</div>
		<button id="btn-logout" on:click={logOut}>Logout</button>
	{:else}
		<p>Please login.</p>
		<button id="btn-login" on:click={login}>Login</button>
	{/if}
</div>

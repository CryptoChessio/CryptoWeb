<script>
	import { onMount } from 'svelte';
	import { serverUrl, appId } from '$lib/env';
	import { login, logOut } from '$lib/MoralisUtil';
	import { currentUser } from '../stores';
	onMount(async () => {
		console.log('social login');
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
		<div
			class="rounded-xl m-auto flex-col p-3 w-4/6 border border-double border-4 flex text-center
			items-center bg-gray-800 justify-center">
			<table>
				<tr>
					<td>
						<img
							class="rounded-full h-16 w-16 m-3"
							src={$currentUser.avatar}
							alt={$currentUser.name} />
					</td>
					<td class="m-3">
						<div class="text-xl">{$currentUser.get('username')}</div>
						<div class="text-sm">{$currentUser.get('ethAddress')}</div>
					</td>
				</tr>
			</table>
			<button
				class="my-8 bg-purple-500 duration-700 ease-in-out hover:bg-purple-700 text-white
				text-center py-2 px-4 rounded"
				id="btn-logout"
				on:click={logOut}>
				Logout
			</button>
		</div>
	{:else}
		<div
			class="rounded-xl m-auto flex-col p-3 w-2/6 border border-slate-300 border-double border-4
			flex text-center items-center bg-slate-900 justify-center">
			<p class="m-3">Please login.</p>
			<button
				class="bg-blue-500 duration-700 ease-in-out hover:bg-blue-700 text-white text-center py-2
				px-4 rounded"
				id="btn-login"
				on:click={login}>
				Login
			</button>
		</div>
	{/if}
</div>

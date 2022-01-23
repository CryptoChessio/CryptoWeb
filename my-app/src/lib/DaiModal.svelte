<script>
	import { user } from '$lib/contributor.js';

	function handleOnSubmit() {
		alert('Submitted');
	}
</script>

<div class="flex bg-zinc-8=600 m-auto">
	<div class="flex m-auto flex-col">
		<h1>Find Game</h1>
		<button>Find Game</button>
	</div>
	<div class="flex m-auto">
		<form class="flex flex-col bg-gray-500 m-8 p-3 rounded-xl" on:submit={handleOnSubmit}>
			<div class="m-auto my-3">
				<label>Name or Username:</label>
				<input
					class="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
			placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
			disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
			invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500
			focus:invalid:ring-pink-500"
					type="text"
					bind:value={$user.name}
				/>
			</div>
			<div class="m-auto my-3">
				<label>Eth-address:</label>
				<input type="text" bind:value={$user.address} />
			</div>
			<div class="bg-gray-600 rounded m-auto p-3 my-3">
				<button type="submit">Submit</button>
			</div>
		</form>
	</div>
</div>

<style>
	* {
		font-family: 'Nova Oval';
	}
</style>

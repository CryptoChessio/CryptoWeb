<script>
	// This property is used by Modal.svelte to pass down the close function
	export let onClose;
</script>

<button on:click={onClose} class="rounded-full duration-700 ease-in-out hover:rotate-90">x</button>

<style>
	button {
		position: absolute;
		top: -3rem;
		right: 0;
		color: white;
		background: rgb(20, 20, 20);
		border: 2px solid rgb(180, 177, 178);
		font-size: 1rem;
		width: 2rem;
		height: 2rem;
	}
</style>

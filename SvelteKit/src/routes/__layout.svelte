<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import github from '../Assets/Icons/Github.png';
	import discord from '../Assets/Icons/Discord.png';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>
		<strong>Donate</strong>
		to our eth address
		<highlight>0x2630ce05769Eb216a24Be24988D3872942aeAe3d</highlight>
	</p>
	<div class="flex ">
		<a href="https://github.com/CryptoChessio" target="_blank">
			<img class="logo m-3 duration-700 ease-in-out hover:scale-110" src={github} alt="GitHub" />
		</a>
		<a href="https://discord.gg/j8GTGWGAXe" target="_blank">
			<img class="logo m-3 duration-700 ease-in-out hover:scale-110" src={discord} alt="GitHub" />
		</a>
	</div>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
	highlight {
		color: var(--accent-color);
	}
	.logo {
		width: 5rem;
		border-radius: 1rem;
	}
</style>

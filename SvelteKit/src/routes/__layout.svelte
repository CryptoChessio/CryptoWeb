<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import github from '../Assets/Icons/Github.png';
	import discord from '../Assets/Icons/Discord.png';
	import signal from '../Assets/Icons/signal.png';
	import telegram from '../Assets/Icons/telegram.png';
</script>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	footer a {
		font-weight: bold;
	}
	highlight {
		color: var(--accent-color);
	}
	.logo {
		width: 5rem;
		border-radius: 1rem;
	}
</style>

<Header />

<main>
	<slot />
</main>

<footer>
	<!-- <p>
		<strong>Donate</strong>
		to our eth address
		<highlight>0x2630ce05769Eb216a24Be24988D3872942aeAe3d</highlight>
	</p> -->
	<div class="flex text-center items-center justify-center">
		<hr />
		<a href="https://github.com/CryptoChessio" target="_blank">
			<img class="logo m-3 duration-700 ease-in-out hover:scale-110" src={github} alt="GitHub" />
		</a>
		<a href="https://discord.gg/kx8unwWuUp" target="_blank">
			<img class="logo m-3 duration-700 ease-in-out hover:scale-110" src={discord} alt="GitHub" />
		</a>
		<a href="https://signal.group/#CjQKIHHvjy7Mj5CcSk-DyG0fwxY1UqSX4E576W8HfFCEx3zVEhDYVcXReCvIurj-aCLaHl1v" target="_blank">
			<img class="logo m-3 duration-700 ease-in-out hover:scale-110" src={signal} alt="Signal" />
		</a>
		<a href="https://t.me/+dvZvBw7rO71jNzll" target="_blank">
			<img
				class="logo m-3 duration-700 ease-in-out hover:scale-110"
				src={telegram}
				alt="Telegram" />
		</a>
	</div>
</footer>

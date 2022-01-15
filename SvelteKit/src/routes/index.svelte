<script context="module">
	export const prerender = true;
</script>

<script>
	import hero from '../Assets/Pages/hero-bg.jpeg';
	import chessB from '../Assets/Pages/chessB.png';
</script>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	.hero {
		width: 100%;
		height: 80vh;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		text-align: center;
		margin-top: auto;
		justify-content: center;
	}
	.hero-img {
		position: absolute;
		top: 10;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		opacity: 0.5;
		border-radius: 1rem;
	}
</style>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="hero">
		<img src={hero} class="hero-img" alt="hero-bg" />
		<h1>Chess for the masses</h1>
		<p>Combine your Chess skills and your crypto capital to earn gains</p>
	</div>

	<div class="hero">
		<img src={chessB} class="hero-img" alt="hero-bg" />
		<h1>Chess for the masses</h1>
		<p>Combine your Chess skills and your crypto capital to earn gains</p>
	</div>
	<br />
	<br />
	<br />
	<br />
</section>

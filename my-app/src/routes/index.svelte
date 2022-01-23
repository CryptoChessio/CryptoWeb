<script context="module">
	export const prerender = true;
</script>

<script>
	import hero from '../Assets/Pages/hero-bg.jpeg';
	import chessB from '../Assets/Pages/chessB.png';
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Nova+Oval&display=swap');

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		font-family: 'Monoton', cursive;
	}
	p {
		font-family: 'Nova Oval', cursive;
	}
	.hero {
		width: 100%;
		height: 100vh;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		text-align: center;
		margin-top: auto;

		justify-content: center;
	}
	.hero-img {
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		opacity: 0.6;
	}
</style>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="hero text-center items-center justify-center flex">
		<img src={hero} class="hero-img hue-rotate-60 blur-sm saturate-200" alt="hero-bg" />
		<div>
			<h1 class="text-6xl subpixel-antialiased text-red-300 ">Chess for the crypto inclined</h1>
			<p>Combine your chess skills and your crypto to earn</p>
		</div>
	</div>

	<div class="hero text-center items-center justify-center flex">
		<img src={chessB} class="hero-img blur-sm" alt="hero-bg" />
		<div>
			<h1>Chess for the masses</h1>
			<p>Combine your Chess skills and your crypto capital to earn gains</p>
		</div>
	</div>
	<br />
	<br />
	<br />
	<br />
</section>

<script context="module">
	export const prerender = true;
</script>

<script>
	import hero from '../Assets/Pages/hero-bg.jpeg';
	import chessB from '../Assets/Pages/chessB.png';
	let y = 0;
	//if y is more than 0, then scroll to 25
	$: console.log(y);
	if (y < 80) {
		y = 80;
	}
</script>

<style lang="scss">
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
		font-family: 'Inter', sans-serif;
	}
	p {
		font-family: 'Inter', sans-serif;
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

	.text-box {
		font-family: 'Inter', sans-serif;
		background-color: #fff;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-content: center;
		flex-direction: column;
	}

	.h1 {
		font-size: 9vw;
		font-weight: 900;
		background-color: #000;
		color: #fff;
		display: block;
		padding: 0.5em;
		font-family: 'Inter', sans-serif;
	}

	h1:nth-child(2) {
		position: absolute;
		background-color: #fff;
		color: #000;
		clip-path: inset(
			-1% -1% 50% -1%
		); // Added the negative values to prevent icky "bleed" in Chrome
	}

	p {
		font-size: 2vw;
		font-weight: 900;
		margin-top: 1em;
		text-align: center;
	}
	.container {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>

<svelte:window bind:scrollY={y} />
<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="hero text-center items-center justify-center flex container ">
		<div class="text-box">
			<h1 class="h1">CRYPTOCHESS</h1>
			<h1 class="h1">CRYPTOCHESS</h1>
		</div>
		<p>An online chess game for crypto enthusiasts</p>
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

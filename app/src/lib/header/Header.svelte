<script>
	import { page } from '$app/stores';
</script>

<style>
	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid #000000;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 900;
		font-size: 1.4rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
	}

	.link:hover {
		/* Fallback: Set a background color. */
		background-color: red;

		/* Create the gradient. */
		background-image: linear-gradient(180deg, #ff2a2a, #ffa958);

		/* Set the background size and repeat properties. */
		background-size: 100%;
		background-repeat: repeat;

		/* Use the text as a mask for the background. */
		/* This will show the gradient as a text color rather than element bg. */
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-background-clip: text;
		-moz-text-fill-color: transparent;
	}

	nav {
		background: var(--background);
		background-size: contain;
		transition: all 0.3s ease-in-out;
		border-bottom: #000000 solid 4px;
		height: 10vh;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
</style>

<header>
	<nav>

		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a class="link" sveltekit:prefetch href="/">Home</a>
			</li>
			<li class:active={$page.url.pathname === '/play'}>
				<a class="link" sveltekit:prefetch href="/play">play</a>
			</li>
			<li class:active={$page.url.pathname === '/leaderBoard'}>
				<a class="link" sveltekit:prefetch href="/leaderBoard">leaderboard</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a class="link" sveltekit:prefetch href="/about">about</a>
			</li>
			<li class:active={$page.url.pathname === '/profile'}>
				<a class="link" sveltekit:prefetch href="/profile">profile</a>
			</li>
			<li class:active={$page.url.pathname === '/store'}>
				<a class="link" sveltekit:prefetch href="/store">store</a>
			</li>
		</ul>
	</nav>

</header>

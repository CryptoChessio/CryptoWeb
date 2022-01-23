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
		border-top: var(--size) solid #ffffff;
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
		transition: all 0.3s ease-in-out;
	}

	.link:hover {
		color: #ffd519;
	}

	nav {
		background: var(--background);
		background-size: contain;
		transition: all 0.3s ease-in-out;
		border-bottom: #a0a0a0 solid 4px;
		height: 10vh;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
</style>

<header>
	<div class="corner" />

	<nav>

		<ul>
			<li class:active={$page.path === '/'}>
				<a class="link" sveltekit:prefetch href="/">Home</a>
			</li>
			<li class:active={$page.path === '/play'}>
				<a class="link" sveltekit:prefetch href="/play">play</a>
			</li>
			<li class:active={$page.path === '/leaderBoard'}>
				<a class="link" sveltekit:prefetch href="/leaderBoard">leaderboard</a>
			</li>
			<li class:active={$page.path === '/about'}>
				<a class="link" sveltekit:prefetch href="/about">about</a>
			</li>
			<li class:active={$page.path === '/profile'}>
				<a class="link" sveltekit:prefetch href="/profile">profile</a>
			</li>
			<li class:active={$page.path === '/store'}>
				<a class="link" sveltekit:prefetch href="/store">store</a>
			</li>
		</ul>
	</nav>

	<div class="corner" />
</header>

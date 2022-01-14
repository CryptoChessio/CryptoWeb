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
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: all 0.3s ease-in-out;
	}

	a:hover {
		color: #ffffff;
		font-size: 1rem;
	}
</style>

<header>
	<div class="corner" />

	<nav>

		<ul>
			<li class:active={$page.path === '/'}>
				<a sveltekit:prefetch href="/">Home</a>
			</li>
			<li class:active={$page.path === '/Play'}>
				<a sveltekit:prefetch href="/Play">Play</a>
			</li>
			<li class:active={$page.path === '/LeaderBoard'}>
				<a sveltekit:prefetch href="/LeaderBoard">Leaderboard</a>
			</li>
			<li class:active={$page.path === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.path === '/Profile'}>
				<a sveltekit:prefetch href="/Profile">Profile</a>
			</li>
			<li class:active={$page.path === '/store'}>
				<a sveltekit:prefetch href="/store">store</a>
			</li>
		</ul>
	</nav>

	<div class="corner" />
</header>

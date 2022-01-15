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

	.link:hover {
		color: #ffffff;
		font-size: 1rem;
		background-color: rgb(57, 96, 131, 0.5);
		border-radius: 3rem;
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
			<li class:active={$page.path === '/Play'}>
				<a class="link" sveltekit:prefetch href="/Play">Play</a>
			</li>
			<li class:active={$page.path === '/LeaderBoard'}>
				<a class="link" sveltekit:prefetch href="/LeaderBoard">Leaderboard</a>
			</li>
			<li class:active={$page.path === '/about'}>
				<a class="link" sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.path === '/Profile'}>
				<a class="link" sveltekit:prefetch href="/Profile">Profile</a>
			</li>
			<li class:active={$page.path === '/store'}>
				<a class="link" sveltekit:prefetch href="/store">store</a>
			</li>
		</ul>
	</nav>

	<div class="corner" />
</header>

<script context="module">
	import { browser, dev } from '$app/env';
	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script>
	import BAT from '../Assets/Icons/BAT.png';
	import DAI from '../Assets/Icons/DAI.png';
	import MATIC from '../Assets/Icons/MATIC.png';
</script>

<svelte:head>
	<title>about</title>
</svelte:head>

<div class="content">
	<main>
		<div>
			<h1 class="text-2xl bg-gray-700 rounded p-2 m-auto w-40">Who are we?</h1>
			<br />
			<p>
				Rn its just me and kinda my gf trying to make a fun game and get into the world of crypto
				gaming
			</p>
			<br />
		</div>

		<div>
			<h1 class="text-2xl bg-gray-700 rounded p-2 m-auto w-40">What is this?</h1>
			<br />
			<p>
				A crypto "gaining" game where you can "stake" crypto during a game of chess. The winner of
				the game gets the combined yeild of the stakers
			</p>
			<br />
		</div>

		<div>
			<h1 class="text-2xl bg-gray-700 rounded p-2 m-auto w-40">Tokenomics?</h1>
			<br />
			<div class="list-none text-center items-center justify-center flex">
				<div
					class="bg-gradient-to-r from-yellow-500 to-yellow-200 rounded-lg p-5 m-2 duration-700
					ease-in-out hover:-rotate-3 hover:scale-110">
					<img
						src={DAI}
						alt="DAI"
						width={25}
						height={25}
						class="duration-700 ease-in-out hover:rotate-90 " />
					<p>
						<strong class="text-xl">DAI</strong>
						<br />
						DAI is a decentralized stablecoin that is pegged to the USD.
					</p>
				</div>
				<div
					class="bg-gradient-to-r from-indigo-400 to-indigo-800 rounded-lg p-5 m-2 shadow-xl
					duration-700 ease-in-out hover:scale-110">
					<img
						src={MATIC}
						alt="polygon"
						width={25}
						height={25}
						class="fill-white duration-700 ease-in-out hover:rotate-180" />
					<p>
						<strong class="text-xl">MATIC</strong>
						<br />
						MATIC (Polygon) is the utility token for the Matic network a layer 2 scaling protocol
						for the ethereum blockchain.
					</p>
				</div>
				<div
					class="bg-gradient-to-r from-orange-500 to-violet-700 rounded-lg p-5 m-2 shadow-xl
					duration-700 ease-in-out hover:rotate-3 hover:scale-110">
					<img
						src={BAT}
						alt="BAT"
						width={25}
						height={25}
						class="fill-white duration-700 ease-in-out hover:skew-x-6" />
					<p>
						<strong class="text-xl">BAT</strong>
						<br />
						BAT is the utility token for the Brave browser.
					</p>
				</div>
			</div>
			<p>We are using these coins because</p>
			<li>DAI</li>
			<p>A decentralized stable coin that has stood the test of time</p>
			<li>BAT</li>
			<p>
				A project the everyone should be using and allows people to use our app without losing their
				own money
			</p>
			<li>MATIC</li>
			<p>Polygon utility token, enough said</p>
		</div>
	</main>
</div>

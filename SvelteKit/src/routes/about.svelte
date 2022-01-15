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
	import eth from '../Assets/Icons/ETH.png';
	import Polygon from '../Assets/Icons/PolygonPixel.png';
	import Avax from '../Assets/Icons/AVAX.png';
	import Algorand from '../Assets/Icons/Algorand.png';
</script>

<style>
	.logo {
		width: 5rem;
		border-radius: 1rem;
	}
	.section {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	h1 {
		justify-content: center;
	}
	.Item {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		margin: 1rem;
		width: 50vw;
		padding: 1rem;
		border-radius: 1rem;
		background-color: #48a0d3;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		transition: all 0.2s ease-in-out;
	}

	.Item:nth-child(2) {
		background-color: #4879d3;
	}

	.bigone {
		margin-right: 3rem;
		margin-left: 3rem;
	}
</style>

<svelte:head>
	<title>about</title>
</svelte:head>
<div class="content">
	<main>

		<div class="section">
			<div class="Item title">
				<h1 class="">What is this?</h1>
				<br />
			</div>
			<div class="Item title">
				<p>
					This is a GameFi, where players can "gain" game where you can "stake" crypto during a game
					of chess. The winner of the game gets the combined yield of the stake. I am not allowed to
					use the b word because it might be illegal in the future. The chess game has
					<strong>no check checking</strong>
					but supports all special moves. This is because I feel like it is funny to blunder when
					money is on the line. A 4-player game mode is in development and I would love to implement
					5D (4D) chess in the future as well.
				</p>
			</div>
			<br />
		</div>

		<div class="section">
			<div class="Item title">
				<h1 class="">Who are we?</h1>
				<br />
			</div>
			<div class="Item title">
				<p>
					Currently it is just me, Arctesian. I have done the development of the game website and
					smart contracts. I have created a DAO erc20 token. This will be minted to each person who
					signs in with their wallet. This will be used to vote on governance of the game. I would
					really like people to help me build NFT skins for the game as 3D and unity work does take
					a long time, I would also like to cultivate a community of crypto and chess lovers.
				</p>
			</div>
			<br />
		</div>

		<div class="section">
			<div class="Item title">
				<h1 class="">Chains?</h1>
				<br />
			</div>
			<div class="Item title">
				<p>
					Currently I have chosen to only support polygon for tx fees, on launch I will incorporate
					Algorand and I am very excited to work with perl because solidity reminds me too much of
					Java. I will incorporate Avax when I make enough money to support it and Eth will be
					supported on launch of Eth 2.
				</p>
			</div>
			<div class="flex content-center text-center items-center justify-center">
				<a href="https://discord.gg/j8GTGWGAXe" target="_blank">
					<img
						class="logo m-3 duration-700 ease-in-out hover:scale-110"
						src={Polygon}
						alt="Polygon" />
				</a>
				<a href="https://discord.gg/j8GTGWGAXe" target="_blank">
					<img class="logo m-3 duration-700 ease-in-out hover:scale-110" src={Avax} alt="Avax" />
				</a>
				<a href="https://discord.gg/j8GTGWGAXe" target="_blank">
					<img class="logo m-3 duration-700 ease-in-out hover:scale-110" src={eth} alt="Eth" />
				</a>
				<a href="https://discord.gg/j8GTGWGAXe" target="_blank">
					<img
						class="logo m-3 duration-700 ease-in-out hover:scale-110"
						src={Algorand}
						alt="Algorand" />
				</a>
				<br />
			</div>
		</div>

		<div class="bigone">
			<div class="list-none text-center items-center flex">
				<div
					class="bg-gradient-to-r from-yellow-500 to-yellow-200 rounded-lg p-5 m-2 duration-700
					ease-in-out hover:-rotate-3 hover:scale-110 h-48">
					<img
						src={DAI}
						alt="DAI"
						width={50}
						class="m-auto duration-700 ease-in-out hover:rotate-90 " />
					<p>
						<strong class="text-xl">DAI</strong>
						<br />
						DAI is a decentralized stablecoin that is pegged to the USD.
					</p>
				</div>
				<div
					class="bg-gradient-to-r from-indigo-400 to-indigo-800 rounded-lg p-5 m-2 shadow-xl
					duration-700 ease-in-out hover:scale-110 h-48">
					<img
						src={MATIC}
						alt="polygon"
						width={50}
						class="m-auto fill-white duration-700 ease-in-out hover:rotate-180" />
					<p>
						<strong class="text-xl">MATIC</strong>
						<br />
						MATIC (Polygon) is the utility token for the Matic network a layer 2 scaling protocol
						for the ethereum blockchain.
					</p>
				</div>
				<div
					class="bg-gradient-to-r from-orange-500 to-violet-700 rounded-lg p-5 m-2 shadow-xl
					duration-700 ease-in-out hover:rotate-3 hover:scale-110 h-48">
					<img src={BAT} alt="BAT" width={50} class="m-auto fill-white" />
					<p>
						<strong class="text-xl">BAT</strong>
						<br />
						BAT is the utility token for the Brave browser.
					</p>
				</div>
			</div>
			<div class="list-none text-center items-center justify-center flex">
				<div class="m-10">
					<h1>DAI</h1>
					<p>A decentralized stable coin that has stood the test of time</p>
				</div>
				<div class="m-10">
					<h1>BAT</h1>
					<p>
						The utility token of the brave browser, everyone should be using this as I would love to
						host on IPFS however I can not do that yet as IPFS is no supported on most browsers. The
						brave browser give user tokens for viewing adds on their browser.
					</p>
				</div>
				<div class="m-10">
					<h1>MATIC</h1>
					<p>Polygon utility token, enough said</p>
				</div>
			</div>
		</div>
	</main>
</div>

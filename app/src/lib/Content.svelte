<script>
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';
	import BAT from '../Assets/Icons/BAT.png';
	import DAI from '../Assets/Icons/DAI.png';
	import MATIC from '../Assets/Icons/MATIC.png';
	import Popup from './DaiModal.svelte';
	import CloseButton from './CloseButton.svelte';
	const { open } = getContext('simple-modal');

	let opening = false;
	let opened = false;
	let closing = false;
	let closed = false;

	const showPopup = () => {
		open(
			Popup,
			{
				message: "It's a customized popup!"
			},
			{
				closeButton: CloseButton,
				styleBg: {
					background: 'rgba(39, 39, 39);'
				},
				styleWindowWrap: {
					margin: '2rem'
				},
				styleWindow: {
					border: '2px solid rgba(23, 23, 23)',
					background: 'rgba(39, 39, 39)'
				},
				styleContent: {
					color: '#272727',
					fontFamily: 'Comic Sans',
					fontStyle: 'italic'
				},
				styleCloseButton: {
					borderRadius: 0,
					boxShadow: '0 0 0 2px black',
					background: 'rgba(39, 39, 39)'
				},
				transitionWindow: fly,
				transitionWindowProps: {
					y: 100,
					duration: 1000
				}
			},
			{
				onOpen: () => {
					opening = true;
				},
				onOpened: () => {
					opening = false;
					opened = true;
				},
				onClose: () => {
					opened = false;
					closing = true;
				},
				onClosed: () => {
					closing = false;
					closed = true;
					setTimeout(() => {
						closed = false;
					}, 1000);
				}
			}
		);
	};
</script>

<style>
	.item {
		width: 30vw;
		margin: 1rem;
	}
</style>

<section>
	<main class="flex content-center text-center items-center justify-center">
		<button on:click={showPopup}>
			<div
				class="item m-auto hover:bg-gray-700 flex-item rounded-md p-12 ring-2 ring-yellow-500
				ring-offset-4 ring-offset-yellow-100 duration-700 ease-in-out hover:scale-110
				cursor-crosshair hover:text-slate-100 ">
				<h1>1 v 1 DAI</h1>
				<img
					src={DAI}
					alt="DAI"
					width={75}
					class="m-auto duration-700 ease-in-out hover:rotate-90 " />
			</div>
		</button>

		<button on:click={showPopup}>
			<div
				class="item m-auto bg-grey-700 flex-item hover:bg-gray-700 ring-2 ring-rose-500
				ring-offset-4 ring-offset-rose-300 flex-item rounded-md p-12 duration-700 ease-in-out
				hover:scale-110 cursor-crosshair hover:text-slate-100 ">
				<h1>1 v 1 BAT</h1>
				<img src={BAT} alt="BAT" width={75} class="m-auto fill-whites" />
			</div>
		</button>

		<button on:click={showPopup}>
			<div
				class="item m-auto bg-grey-700 hover:bg-gray-700 flex-item ring-2 ring-purple-500
				ring-offset-4 ring-offset-purple-100 rounded-md p-12 border-yellow-500 duration-700
				ease-in-out hover:scale-110 hover:text-slate-100 cursor-crosshair">
				<h1>1 v 1 MATIC</h1>
				<img
					src={MATIC}
					alt="polygon"
					width={75}
					class="m-auto fill-white duration-700 ease-in-out hover:rotate-180" />
			</div>
		</button>
	</main>
</section>

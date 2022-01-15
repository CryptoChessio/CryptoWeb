<script>
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';
	import BAT from '../Assets/Icons/BAT.png';
	import DAI from '../Assets/Icons/DAI.png';
	import MATIC from '../Assets/Icons/MATIC.png';
	import Popup from './DaiModal.svelte';

	const { open } = getContext('simple-modal');

	let opening = false;
	let opened = false;
	let closing = false;
	let closed = false;

	const showPopup = () => {
		open(Popup);
	};
</script>

<section>
	<main class="flex content-center text-center items-center justify-center">
		<button on:click={showPopup}>
			<div
				class="m-auto hover:bg-gray-700 flex-item rounded-md p-12 ring-2 ring-yellow-500
				ring-offset-4 ring-offset-yellow-100 duration-700 ease-in-out hover:scale-110 m-10">
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
				class="m-auto bg-grey-700 flex-item hover:bg-gray-700 ring-2 ring-rose-500 ring-offset-4
				ring-offset-rose-300 flex-item rounded-md p-12 duration-700 ease-in-out hover:scale-110 m-10">
				<h1>1 v 1 BAT</h1>
				<img src={BAT} alt="BAT" width={75} class="m-auto fill-whites" />
			</div>
		</button>

		<button on:click={showPopup}>
			<div
				class="m-auto bg-grey-700 hover:bg-gray-700 flex-item ring-2 ring-purple-500 ring-offset-4
				ring-offset-purple-100 rounded-md p-12 border-yellow-500 duration-700 ease-in-out
				hover:scale-110 m-10">
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

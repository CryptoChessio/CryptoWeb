<script>
	import Modal from '../lib/Modal.svelte';
	import { modal } from '../lib/store';
	import Content from '../lib/Content.svelte';
</script>

<svelte:head>
	<title>Play</title>
</svelte:head>
<Modal show={$modal}>
	<Content />
</Modal>

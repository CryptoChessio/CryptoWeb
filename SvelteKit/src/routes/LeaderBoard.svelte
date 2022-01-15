<script>
	let name = 'testName';
	let played = 69;
	let win = 69;
	let earned = 69;
</script>

<style>
	table {
		border-collapse: collapse;
		width: 70%;
		margin: auto;
	}
	tr,
	td,
	th {
		padding: 5px;
	}
	th {
		border: 1px solid black;
		color: white;
	}
	th:nth-child(1) {
		background-color: #95af4c;
	}
	th:nth-child(2) {
		background-color: #af904c;
	}
	th:nth-child(3) {
		background-color: #af6b4c;
	}
	th:nth-child(3) {
		background-color: #a74caf;
	}
	th:nth-child(4) {
		background-color: #724caf;
	}
	.one {
		background-color: #fcff46;
	}
</style>

<svelte:head>
	<title>LeaderBoard</title>
</svelte:head>
<main>
	<div class="p-3">
		<h1 class="text-2xl m-3 tracking-wide">The Meritocratic Standings</h1>
		<div class="">
			<table class="">
				<tr class="one">
					<th>Rank</th>
					<th>Name</th>
					<th>Played</th>
					<th>Win ( % )</th>
					<th>Earned (USD)</th>
				</tr>
				<tr class="">
					<td>1</td>
					<td>{name}</td>
					<td>{played}</td>
					<td>{win}%</td>
					<td>${earned}</td>
				</tr>

			</table>
		</div>
	</div>
</main>

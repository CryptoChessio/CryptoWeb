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
		border-radius: 1rem;
	}
	th:nth-child(1) {
		background-color: #000000;
	}
	th:nth-child(2) {
		background-color: #ffffff;
		color: #000000;
	}
	th:nth-child(3) {
		background-color: #000000;
	}
	th:nth-child(4) {
		background-color: #ffffff;
		color: #000000;
	}
	th:nth-child(5) {
		background-color: #000000;
	}

	table th,
	table td {
		border: none !important;
	}
	table th:first-child {
		-moz-border-radius: 5px 0 0 0 !important;
	}
	table th:last-child {
		-moz-border-radius: 0 5px 0 0 !important;
	}
	table tr:last-child td:first-child {
		-moz-border-radius: 0 0 0 5px !important;
	}
	table tr:last-child td:last-child {
		-moz-border-radius: 0 0 5px 0 !important;
	}
	table tr:hover td {
		background-color: rgba(119, 119, 119, 0.103) !important;
	}
</style>

<svelte:head>
	<title>LeaderBoard</title>
</svelte:head>
<main>
	<div class="p-3">
		<h1 class="text-2xl m-3 text-center tracking-wide">The Meritocratic Standings</h1>
		<div class="">
			<table class="table-auto text-center ">
				<tr class="">
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
				<tr class="">
					<td>2</td>
					<td>{name}</td>
					<td>{played}</td>
					<td>{win}%</td>
					<td>${earned}</td>
				</tr>
				<tr class="">
					<td>3</td>
					<td>{name}</td>
					<td>{played}</td>
					<td>{win}%</td>
					<td>${earned}</td>
				</tr>

			</table>
		</div>
	</div>
</main>

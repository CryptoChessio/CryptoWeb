<script>
	import { onMount } from 'svelte';

	async function login() {
		let user = Moralis.User.current();

		if (!user) {
			user = await Moralis.authenticate({ signingMessage: 'Log in using Moralis' })
				.then(function (user) {
					console.log('logged in user:', user);
					console.log(user.get('ethAddress'));
				})
				.catch(function (error) {
					console.log(error);
				});
		} else {
			console.log(user);
		}
	}

	onMount(() => {
		const serverUrl = 'https://kqv1hqmigpho.usemoralis.com:2053/server';
		const appId = 'XdXC23U4SiRFenvHOPrk5Mtp8arlfIbMtdAI0UpO';
		Moralis.start({ serverUrl, appId });

		login();
		console.log(Moralis.User.current());
	});

	function logout() {
		Moralis.logout();
	}

	function getUser() {
		const user = Moralis.User.current();
		console.log(user);
	}

	function getUserData() {
		const user = Moralis.User.current();
		const data = user.get('data');
		console.log(data);
	}

	function getUserEthAddress() {
		const user = Moralis.User.current();
		const ethAddress = user.get('ethAddress');
		console.log(ethAddress);
	}

	function getUserEthBalance() {
		const user = Moralis.User.current();
		const ethBalance = user.get('ethBalance');
		console.log(ethBalance);
	}

	function getUserEthBalanceInWei() {
		const user = Moralis.User.current();
		const ethBalanceInWei = user.get('ethBalanceInWei');
		console.log(ethBalanceInWei);
	}

	function getUserEthBalanceInUsd() {
		const user = Moralis.User.current();
		const ethBalanceInUsd = user.get('ethBalanceInUsd');
		console.log(ethBalanceInUsd);
	}
</script>

<img src="https://randomuser.me/api/portraits/lego/2.jpg" alt="Moralis" class="m-auto" />

<h1>{user} profile img</h1>

<p />

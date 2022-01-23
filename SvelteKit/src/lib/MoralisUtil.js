import { ethers } from 'ethers';
/**
 * Ethereum, BSC, and Polygon Login
 * @param {string} provider the provider used when login. "metamask", "walletconnect"
 */
export async function login() {
	console.log('login');
	const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
	// Prompt user for account connections
	await provider.send('eth_requestAccounts', []);
	const signer = provider.getSigner();
	console.log('Account:', await signer.getAddress());
}

/**
 * Logout
 */
export async function logOut() {
	await Moralis.User.logOut();
	console.log('logged out');
	currentUser.set(null);
}

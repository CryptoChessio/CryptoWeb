import { currentUser } from '../stores';

/**
 * Ethereum, BSC, and Polygon Login
 * @param {string} provider the provider used when login. "metamask", "walletconnect"
 */
export async function login(provider="metamask") {
    let user = Moralis.User.current();
    if (!user) {
        user = await Moralis.authenticate({ provider, signingMessage: "Log in using Moralis" })
            .then(user => {
                console.log("logged in user: ", user);
                currentUser.set(user);
            })
            .catch(error => {
                console.log(error);
            });
    }
}

/**
 * Logout
 */
export async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
    currentUser.set(null);
}
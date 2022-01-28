export interface User {
	id: number;
	name: string;
	address: string;
	avatar: string;
	gamesPlayed: number;
	gamesWon: number;
	gamesLost: number;
	gamesTied: number;
	nftsOwned: string[] | null;
}



class MarvelService {
	getResource = async (url) => {
		let res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	}

	getAllCharacters = () => {
		return this.getResource('https://gateway.marvel.com:443/v1/public/characters?apikey=81c9ec44faf041042c369770623c2248');
	}
}

export default MarvelService;
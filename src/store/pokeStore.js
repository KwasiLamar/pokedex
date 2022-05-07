import { writable } from 'svelte/store';

export const PokeStore = writable([]);

export const fetchPokemon = async () => {
	let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
	let data = await res.json();

	let pokemonLoaded = data.results.map((pokemon, index) => {
		return {
			name: pokemon.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`,
		};
	});
	PokeStore.set(pokemonLoaded);
};

fetchPokemon();

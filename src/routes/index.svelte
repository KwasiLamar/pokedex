<script>
	import PokemanCard from '../components/PokemonCard.svelte';
	import { PokeStore, fetchPokemon } from '../store/pokeStore';
	let searchTerm = '';
	let filteredPokemon = [];
	$: {
		if (searchTerm) {
			filteredPokemon = $PokeStore.filter((pokeman) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()),
			);
		} else {
			filteredPokemon = [...$PokeStore];
		}
	}
	fetchPokemon();
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Pokemon Index</h1>
<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	bind:value={searchTerm}
	placeholder="Search Pokemon"
/>
<div class="py-4 grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as pokemon}
		<PokemanCard {pokemon} />
	{/each}
</div>

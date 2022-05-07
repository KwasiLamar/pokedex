<script>
	export let pokemon;
	import { fade } from 'svelte/transition';
</script>

<a
	sveltekit:prefetch
	transition:fade
	href={`/pokemon/${pokemon.id}`}
	class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
>
	<img src={pokemon.image} class="w-30 h-30" alt={pokemon.name} />
	<h2 class="uppercase text-2xl">{pokemon.id}. {pokemon.name}</h2>
</a>

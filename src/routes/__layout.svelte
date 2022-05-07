<script>
	import Navbar from '../components/Navbar.svelte';
	import '../app.css';
</script>

<div class="p-8 max-w-6xl mx-auto">
	<Navbar />

	<slot />
</div>

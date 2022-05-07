<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`,
			},
		};
	}
</script>

<script>
	export let title;
</script>

<h1 class="text-4xl text-center my-8 py-8">{title}</h1>

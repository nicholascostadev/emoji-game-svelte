<script lang="ts">
	import { get_twemoji_url } from '../utils';
	import { receive } from './transitions';

	export let found: string[];
</script>

<div class="found">
	{#each found as emoji (emoji)}
		<div class="pair">
			<img alt={emoji} src={get_twemoji_url(emoji)} in:receive={{ key: `${emoji}:a` }} />
			<img alt={emoji} src={get_twemoji_url(emoji)} in:receive={{ key: `${emoji}:b` }} />
		</div>
	{/each}
</div>

<style>
	.found {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5em;
		height: 100%;

		filter: drop-shadow(0.2em 0.2em 0.5em rgba(0, 0, 0, 0.2));
	}

	.pair {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 4em;
		height: 4em;
		background: white;
		padding: 1em;
		border-radius: 99999999999px;
	}

	img {
		position: absolute;
		height: 2em;
		width: 2em;
	}
</style>

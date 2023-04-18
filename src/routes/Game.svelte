<script lang="ts">
	import { onMount } from 'svelte';
	import { shuffle } from '../utils';
	import Countdown from './Countdown.svelte';
	import Found from './Found.svelte';
	import Grid from './Grid.svelte';
	import { levels } from './levels';
	import type { Level } from './levels';

	const level = levels[0];

	let size: number = level.size;
	let grid: string[] = create_grid(level);
	let found: string[] = [];
	let remaining = level.duration;
	let duration = level.duration;
	let playing = false;

	function create_grid(level: Level) {
		const copy = level.emojis.slice();
		const pairs: string[] = [];

		for (let i = 0; i < (level.size * level.size) / 2; i += 1) {
			const index = Math.floor(Math.random() * copy.length);
			const emoji = copy[index];

			copy.slice(index, 1);
			pairs.push(emoji);
		}

		pairs.push(...pairs);

		return shuffle(pairs);
	}

	function handle_found(e: CustomEvent<{ emoji: string }>) {
		found = [...found, e.detail.emoji];
	}

	function countdown() {
		const start = Date.now();
		let remaining_at_start = remaining;

		function loop() {
			if (playing) return;
			requestAnimationFrame(loop);

			remaining = remaining_at_start - (Date.now() - start);

			if (remaining <= 0) {
				// TODO: Game over
				playing = false;
			}
		}

		loop();
	}

	onMount(countdown);
</script>

<div class="game">
	<div class="info">
		<Countdown {remaining} duration={level.duration} />
	</div>

	<div class="grid-container">
		<Grid {grid} on:found={handle_found} {found} />
	</div>

	<div class="info">
		<Found {found} />
	</div>
</div>

<style>
	.game {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		height: 100%;

		font-size: min(1vmin, 0.4rem);
	}

	.info {
		width: 80em;
		height: 10em;
	}

	.grid-container {
		height: 80em;
		width: 80em;
	}
</style>

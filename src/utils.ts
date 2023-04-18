export function shuffle<T>(arr: T[]) {
	let i = arr.length;

	while (i--) {
		const j = Math.floor(Math.random() * i + 1);
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	return arr;
}

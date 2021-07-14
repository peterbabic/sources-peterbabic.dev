<script>
	import {storedArray} from './store.js';
	const update = () => storedArray.update(arr => [...arr, arr.length])
</script>

<h1>Array: {$storedArray}</h1>

<button on:click={update}>
	add
</button>

<script>
  import Counter from './lib/Counter.svelte'
  import Puzzle from './crossbit.js'
  import { heart } from './art.js'

  const puzzle = new Puzzle(heart)
</script>

<main>
  <h1>Crossbit</h1>

  <div class="label label--col">
    {#each puzzle.colClusters as col}
      <div>{col}</div>
    {/each}
  </div>

  <div class="label label--row">
    {#each puzzle.rowClusters as row}
      <div>{row}</div>
    {/each}
  </div>

  <div class="card">
    <Counter />
  </div>
</main>

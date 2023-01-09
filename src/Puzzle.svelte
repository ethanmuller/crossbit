<script>
  import Puzzle from './Puzzle.js';

  export let art

  const aPuzzle = new Puzzle(art)

  function handleClick(event) {
    const { x, y } = event.target.dataset
    const bit = aPuzzle.get(x,y)

    if (bit) {
      this.style.backgroundColor = 'green'
    } else {
      this.style.backgroundColor = 'red'
    }
  }
</script>

<div class="puzzle">
  <div class="margin margin--col">
    {#each aPuzzle.colClusters as colLabels}
      <div class="labels">
        {#each colLabels as label}
          <div class="label">{ label }</div>
        {:else}
          <div class="label">0</div>
        {/each}
      </div>
    {/each}
  </div>
  <div class="margin margin--row">
    {#each aPuzzle.rowClusters as rowLabels}
      <div class="labels">
        {#each rowLabels as label}
          <div class="label">{ label }</div>
        {:else}
          <div class="label">0</div>
        {/each}
      </div>
    {/each}
  </div>
  <div class="bits">
    {#each aPuzzle.rowClusters as row, i}
      {#each aPuzzle.colClusters as col, j}
        <button data-x={j} data-y={i} on:click={ handleClick }>{j},{i}</button>
      {/each}
    {/each}
  </div>
</div>

<style>
  .puzzle {
    display: grid;
    grid-template-areas:
      "x col"
      "row bits";
  }

  .margin {
    display: flex;
  }

  .labels {
    display: flex;
  }

  .label {
    display: block;
    width: 24px;
    height: 24px;
    text-align: center;
  }

  .margin--col {
    grid-area: col;
    flex-direction: row;
    background: lightgray;

    display: flex;
  }

  .margin--col .labels {
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
  }

  .margin--row {
    grid-area: row;
    flex-direction: column;
    width: 120px;
    background: gray;
    text-align: right;
    align-items: flex-end;
  }

  .bits {
    grid-area: bits;
    background: #eee;
    width: 216px;
    height: 216px;

    display: flex;
    flex-wrap: wrap;
  }

  .bits button {
    border: none;
    border-radius: 0;
    width: 24px;
    height: 24px;
    line-height: 1;
    padding: 0;
    margin: 0;
    display: block;
    font-size: 0.5em;
  }
</style>

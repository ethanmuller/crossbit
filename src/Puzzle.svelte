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
        <button data-x={j} data-y={i} on:click={ handleClick }></button>
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
    --tile-size: 36px;
  }

  .margin {
    display: flex;
  }

  .labels {
    display: flex;
  }

  .label {
    font-size: 12px;
    display: block;
    width: 24px;
    height: 24px;
    text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .margin--row .label {
      width: 12px;
      height: calc(var(--tile-size) + 1px);
  }

  .margin--col .label {
      line-height: 0;
      width: var(--tile-size);
  }

  .margin--col {
    grid-area: col;
    flex-direction: row;

    display: flex;
  }

  .margin--col .labels {
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
  }

  .margin--row {
      display: flex;
      flex-direction: column;
  }

  .margin--row .labels {
      flex: 1;
      height: var(--tile-size);
      padding-right: 0.4rem;
  }

  .margin--row {
    grid-area: row;
    flex-direction: column;
    text-align: right;
    align-items: flex-end;
  }

  .bits {
    grid-area: bits;
    width: calc(var(--tile-size) * 9 + 1px * 9);
    height: calc(var(--tile-size) * 9 + 1px * 9);

    display: flex;
    flex-wrap: wrap;
    gap: 1px;
  }

  .bits button {
    border: none;
    border-radius: 0;
    width: var(--tile-size);
    height: var(--tile-size);
    line-height: 1;
    padding: 0;
    margin: 0;
    display: block;
    font-size: 0.75em;
    box-sizing: border-box;
    background: var(--tile-b);
  }

  .bits button:nth-child(3n),
  .bits button:nth-child(3n-1),
  .bits button:nth-child(3n-2) {
    background: var(--tile-b);
  }

  .bits button:nth-child(3n),
  .bits button:nth-child(3n-1),
  .bits button:nth-child(3n-2) {
  }
</style>

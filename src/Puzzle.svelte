<script>
  import Puzzle from './Puzzle.js';

  export let art

  const solution = new Puzzle(art)

  const userPuzzleState = new Array(solution.height);
  let winning = false;

  for (let i = 0; i < solution.height; i++) {
      userPuzzleState[i] = new Array(solution.width);
  }

  logState()

  function logState() {
      let resultString = "";

      for (let y = 0; y < userPuzzleState.length; y++) {
          let row = "";

          for (let x = 0; x <userPuzzleState[0].length ; x++) {
              let col = userPuzzleState[y][x] === 1 ? 1 : 0
              row += col

              if (x === userPuzzleState[0].length - 1) {
                  resultString += '\n'
              }
          }

          resultString += row
      }
      console.log(resultString)
  }

  function areYaWinningSon() {
    for (let j = 0; j < solution.height; j++) {
        for (let i = 0; i < solution.height; i++) {
            const a = userPuzzleState[j][i] === 1 ? 1 : 0;
            if (a !== solution.get(i,j)) {
                return false
            }
        }
    }
    return true
  }

function handleClick(event) {
    const { x, y } = event.target.dataset

    if (userPuzzleState[y][x] != 1) {
        this.style.backgroundColor = 'black'
        userPuzzleState[y][x] = 1
    } else {
        this.style.backgroundColor = ''
        userPuzzleState[y][x] = 0
    }

  winning = areYaWinningSon()
  logState()
}


</script>

<div class="puzzle">
  {winning}
  <div class="margin margin--col">
    {#each solution.colClusters as colLabels}
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
    {#each solution.rowClusters as rowLabels}
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
    {#each solution.rowClusters as row, i}
      {#each solution.colClusters as col, j}
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
    background: var(--tile-a);
  }
</style>

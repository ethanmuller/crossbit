function cropNewlines(str) {
  // Remove newline characters from the beginning of the string
  while (str[0] === '\n') {
    str = str.slice(1);
  }

  // Remove newline characters from the end of the string
  while (str[str.length - 1] === '\n') {
    str = str.slice(0, -1);
  }

  return str;
}

export default class Puzzle {
  constructor(art) {
    this.art = cropNewlines(art).split('\n')
    this.height = this.art.length
    this.width = this.art[0].length

    this.validateArt()

    this.rowClusters = []
    this.colClusters = []

    this.fillRowClusters()
    this.fillColClusters()
  }

  validateArt() {
    this.art.forEach(row => {
      if (row.length !== this.width) {
        throw new Error('Uneven rows. Check to make sure every row of artwork has the same number of characters.')
      }
    })
  }

  get(x,y) {
    return this.art[y][x] === '#' ? 1 : 0
  }

  fillRowClusters() {
    this.rowClusters = []

    // for each row
    for (let i = 0; i < this.height; i++) {
      let row = this.art[i]
      row = row.split(' ')
      row = row.filter(r => r !== '')
      row = row.map(i => i.length)
      this.rowClusters.push(row)
    }
  }

  fillColClusters() {
    this.colClusters = []

    for (let x = 0; x < this.width; x++) {
      const clustersInThisCol = []
      let consecutiveBits = 0

      for (let y = 0; y < this.height; y++) {
        const bit = this.get(x,y)

        if (bit === 1) {
          consecutiveBits++
        }

        if (bit === 0) {
          if (consecutiveBits > 0) {
            clustersInThisCol.push(consecutiveBits)
          }
          consecutiveBits = 0
        }

        if (y === this.height-1) {
          if (consecutiveBits > 0) {
            clustersInThisCol.push(consecutiveBits)
          }
        }
      }

      this.colClusters[x] = clustersInThisCol
    }
  }
}

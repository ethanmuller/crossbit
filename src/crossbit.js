export default class Puzzle {
  constructor(art) {
    this.art = art.split('\n')
    this.size = this.art.length

    this.fillRowClusters()
    this.fillColClusters()
  }

  get(x,y) {
    return this.art[y][x] === '#' ? 1 : 0
  }

  fillRowClusters() {
    this.rowClusters = []

    // for each row
    for (let i = 0; i < this.size; i++) {
      let row = this.art[i]
      row = row.split(' ')
      row = row.filter(r => r !== '')
      row = row.map(i => i.length)
      this.rowClusters.push(row)
    }
  }

  fillColClusters() {
    this.colClusters = []

    for (let x = 0; x < this.size; x++) {
      const clustersInThisCol = []
      let consecutiveBits = 0

      for (let y = 0; y < this.size; y++) {
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

        if (y === this.size-1) {
          if (consecutiveBits > 0) {
            clustersInThisCol.push(consecutiveBits)
          }
        }
      }

      this.colClusters[x] = clustersInThisCol
    }
  }
}

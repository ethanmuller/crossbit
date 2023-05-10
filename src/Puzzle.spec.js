import { render, screen } from '@testing-library/svelte'
import Puzzle from './Puzzle.js';
import { heart, square, rectangle, problem, smiley } from './art.js';

describe('Puzzle', () => {
  test('square should be 5x5', () => {
    const aPuzzle = new Puzzle(square)
    expect(aPuzzle.width).toEqual(5)
    expect(aPuzzle.height).toEqual(5)
  })

  test('rectangle should be 5x7', () => {
    const aPuzzle = new Puzzle(rectangle)
    expect(aPuzzle.width).toEqual(5)
    expect(aPuzzle.height).toEqual(7)
  })

  test('heart should have expected cluster data', () => {
    const aPuzzle = new Puzzle(heart)
    expect(aPuzzle.rowClusters).toEqual([
      [3, 3],
      [9],
      [9],
      [9],
      [9],
      [7],
      [5],
      [3],
      [1],
    ])
    expect(aPuzzle.colClusters).toEqual([
      [4],
      [6],
      [7],
      [8],
      [8],
      [8],
      [7],
      [6],
      [4],
    ])
  })

  test('should allow periods for whitespace', () => {
    const aPuzzle = new Puzzle(smiley)
    expect(aPuzzle.rowClusters).toEqual([
      [],
      [],
      [],
      [1, 1],
      [],
      [1, 1],
      [5],
      [],
      [],
    ])
    expect(aPuzzle.colClusters).toEqual([
      [],
      [1],
      [1, 1],
      [1],
      [1],
      [1],
      [1, 1],
      [1],
      [],
    ])
  })

  test('should throw error when art looks invalid', () => {
    expect(() => {
      const aPuzzle = new Puzzle(problem)
    }).toThrowError()
  })
})



import sortAndCountInversions from '../index'
import input from './testInput'

describe('sortAndCountInversions', () => {
    it('should sort an array and count its inversions', () => {
        const arr = [1, 3, 5, 2, 4, 6]

        expect(sortAndCountInversions(arr)).toEqual([
            [1, 2, 3, 4, 5, 6],
            3
        ])
    })

    it('should sort an array and count its inversions', () => {
        const arr = [7, 6, 5, 4, 3, 2, 1]

        expect(sortAndCountInversions(arr)).toEqual([
            [1, 2, 3, 4, 5, 6, 7],
            21
        ])
    })

    it('should sort and count inversions in a big array', () => {
        console.log(input)
        expect(sortAndCountInversions(input)[1]).toEqual(2407905288)
    })
})
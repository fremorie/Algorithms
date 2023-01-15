import quickSort, { partition, getComparisons, chooseMedianPivot } from '../index'
import testInput from '../data/testInput'

describe('partition', () => {
    it('should perform partition routine', () => {
        const arr = [5,2,6,1,9,7,8,3,4]
        const l = 0
        const r = arr.length - 1

        const pivotIndex = partition(arr, l, r)

        expect(arr).toEqual([4, 2, 1, 3, 5, 7, 8, 6, 9])
        expect(pivotIndex).toEqual(4)
    })

    it('should perform partition routine on a sorted array', () => {
        const arr = [1,2,3,4,5,6,7,8,9]
        const l = 0
        const r = arr.length - 1
        const pivotIndex = partition(arr, l, r)

        expect(arr).toEqual([1,2,3,4,5,6,7,8,9])
        expect(pivotIndex).toEqual(0)
    })

    it('should perform partition routine on a big array', () => {
        const arr = [...testInput]
        const pivot = arr[0]
        const l = 0
        const r = arr.length - 1
        partition(arr, l, r)

        const pivotIndex = arr.findIndex((v) => v === pivot)

        expect(arr.slice(0, pivotIndex).every((v) => v < pivot)).toEqual(true)
        expect(arr.slice(pivotIndex + 1).every((v) => v > pivot)).toEqual(true)

    })
})

describe('chooseMedianPivot', () => {
    it('should find median in an array of length 2k', () => {
        const arr = [4,5,6,7]

        expect(arr[chooseMedianPivot(arr, 0, arr.length - 1)]).toEqual(5)
    })

    it('should find median in an array of length 2k + 1', () => {
        const arr = [4,5,6,7,8]

        expect(arr[chooseMedianPivot(arr, 0, arr.length - 1)]).toEqual(6)
    })

    it('should find median in an array of length 2k', () => {
        const arr = [10,3,4,7,1,6,0,2]

        expect(arr[chooseMedianPivot(arr, 0, arr.length - 1)]).toEqual(7)
    })

    it('should find median in an array of length 2k + 1', () => {
        const arr = [10,3,4,0,1,6,5]

        expect(arr[chooseMedianPivot(arr, 0, arr.length - 1)]).toEqual(5)
    })

    it('should find median', () => {
        const arr = [8, 2, 4, 5, 7, 1]

        expect(arr[chooseMedianPivot(arr, 0, arr.length - 1)]).toEqual(4)
    })

    it('should find median in an array of length 2k + 1', () => {
        const arr = [0,3,4,5,1,6,10]

        expect(arr[chooseMedianPivot(arr, 0, arr.length - 1)]).toEqual(5)
    })

    it('should find median in an array of length 2k + 1', () => {
        const arr = [0,3,4,5,1,6,10]

        expect(arr[chooseMedianPivot(arr, 2, arr.length - 1)]).toEqual(4)
    })

    it('should find median in an array of length 2k + 1, starting with 3', () => {
        const arr = [0,3,4,1,5,6,10]

        expect(chooseMedianPivot(arr, 3, arr.length - 1)).toEqual(4)
    })
})

describe('quickSort', () => {
    it('should sort an array', () => {
        const arr = [5,2,6,1,9,7,8,3,4]
        const l = 0
        const r = arr.length - 1

        quickSort(arr, l, r)

        expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
        //expect(getComparisons()).toEqual(12)
    })

    it('should sort a sorted array', () => {
        const arr = [1,2,3,4,5,6,7,8,9]
        const l = 0
        const r = arr.length - 1

        quickSort(arr, l, r)

        expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
        //expect(getComparisons()).toEqual(12)
    })

    it('should sort an array', () => {
        const arr = [20,5,2,6,1,9,7,8,12,3,4,11]
        const l = 0
        const r = arr.length - 1

        quickSort(arr, l, r)

        expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9,11,12,20])
        //expect(getComparisons()).toEqual(12)
    })

    it('should sort a big array', () => {
        const arr = [...testInput]
        const l = 0
        const r = arr.length - 1

        quickSort(arr, l, r)

        expect(arr[0]).toEqual(1)
        expect(arr[arr.length-1]).toEqual(10000)
        //expect(getComparisons()).toEqual(159894)
    })
})
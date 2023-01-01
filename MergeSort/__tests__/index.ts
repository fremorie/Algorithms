import mergeSort from '../index'

describe('mergeSort', () => {
    it('should sort an array', () => {
        const arr = [5,2,6,1,9,7,8,3,4]

        expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })

    it('should sort an array', () => {
        const arr = [5,2,6,10,1,9,7,8,3,4]

        expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
})
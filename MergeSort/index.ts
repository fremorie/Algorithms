/** Sorts an array of n elements in O(n log n) time */

const merge = (arr1: Array<number>, arr2: Array<number>): Array<number> => {
    const result = new Array(arr1.length + arr2.length).fill(0)

    let i = 0
    let j = 0

    for (let k = 0; k < result.length; k++) {
        if (i >= arr1.length) {
            result[k] = arr2[j]
            j++
        } else if (j >= arr2.length) {
            result[k] = arr1[i]
            i++
        } else if (arr1[i] <= arr2[j]) {
            result[k] = arr1[i]
            i++
        } else {
            result[k] = arr2[j]
            j++

        }
    }

    return result
}

const sort = (arr: Array<number>): Array<number> => {
    if (arr.length === 1) {
        return arr
    }

    const arr1 = arr.slice(0, Math.floor(arr.length / 2))
    const arr2 = arr.slice(Math.floor(arr.length / 2), arr.length)

    return merge(sort(arr1), sort(arr2))
}

export default sort

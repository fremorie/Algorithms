/** Sorts an array of n elements and counts its inversions in O(n log n) time */

const mergeAndCountSplitInversions = (B: Array<number>, C: Array<number>): [Array<number>, number] => {
    const D = new Array(B.length + C.length).fill(0)

    let i = 0
    let j = 0

    let inversionsCount = 0

    for (let k = 0; k < D.length; k++) {
        if (i >= B.length) {
            D[k] = C[j]
            j++
        } else if (j >= C.length) {
            D[k] = B[i]
            i++
        } else if (B[i] <= C[j]) {
            D[k] = B[i]
            i++
        } else {
            D[k] = C[j]
            inversionsCount += B.length - i
            j++

        }
    }

    return [D, inversionsCount]
}

const sortAndCountInversions = (arr: Array<number>): [Array<number>, number] => {
    if (!Array.isArray(arr)) {
        throw new Error(`Expected input to be an array, instead received: ${typeof arr}`)
    }

    if (arr.length === 1) {
        return [arr, 0]
    }

    const firstHalf = arr.slice(0, Math.floor(arr.length / 2))
    const secondHalf = arr.slice(Math.floor(arr.length / 2), arr.length)

    const [B, x] = sortAndCountInversions(firstHalf)
    const [C, y] = sortAndCountInversions(secondHalf)
    const [D, z] = mergeAndCountSplitInversions(B, C)

    return [D, x + y + z]
}

export default sortAndCountInversions
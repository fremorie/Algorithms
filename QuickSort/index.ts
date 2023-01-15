let COMPARISONS = 0

export const getComparisons = () => COMPARISONS

export const partition = (arr: Array<number>, l: number, r: number) => {
    const pivot = arr[l]

    let i = l + 1

    for (let j = l + 1; j <= r; j++) {
        if (arr[j] < pivot) {
            const a_j = arr[j]
            const a_i = arr[i]

            arr[j] = a_i
            arr[i] = a_j
            i = i + 1
        }
    }

    const a_l = arr[l]
    const a_i = arr[i - 1]
    arr[l] = a_i
    arr[i - 1] = a_l

    return i - 1
}

const bigger = (a: number, b: number) => {
    if (a > b) return a
    return b
}

const biggest = (a: number, b: number, c: number) => {
    return bigger(a, bigger(b, c))
}

const median = (a: number, b: number, c: number) => {
    const x = biggest(a,b,c)
    if (x === a) {
        return bigger(b,c)
    }

    if (x == b) {
        return bigger(a,c)
    }

    return bigger(a,b)
}

export const chooseMedianPivot = (arr: Array<number>, lo: number, hi: number): number => {
    if (hi - lo <= 1) {
        return lo
    }

    const medianIndex = (hi - lo + 1) % 2 === 0 ? (hi - lo + 1) / 2 - 1 + lo : Math.floor((hi - lo + 1) / 2) + lo
    const first = arr[lo]
    const last = arr[hi]
    const middle = arr[medianIndex]


    // const medianValue = median(first, last, middle)
    //
    // if (medianValue === first) return lo
    // if (medianValue === last) return hi
    // if (medianValue === middle) return medianIndex

    const isMedian = (candidate: number, a: number, b: number) => (candidate > a && candidate < b) || (candidate < a && candidate > b)

    if (isMedian(first, last, middle)) return lo
    if (isMedian(last, middle, first)) return  hi
    if (isMedian(middle, first, last)) return medianIndex

    return lo
}

const quickSort = (arr: Array<number>, lo: number, hi: number) => {
    if (lo >= hi || lo < 0) {
        return
    }

    COMPARISONS += (hi - lo)

    // Choose last element as pivot:
    // const pivotElement = arr[hi]
    // const firstElement = arr[lo]
    // arr[lo] = pivotElement
    // arr[hi] = firstElement


    // Choose median element as pivot:
    const pivotElementIndex = chooseMedianPivot(arr, lo, hi)
    const pivotElement = arr[pivotElementIndex]
    const firstElement = arr[lo]
    arr[lo] = pivotElement
    arr[pivotElementIndex] = firstElement

    const pivotIndex = partition(arr, lo, hi)

    quickSort(arr, lo, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, hi)
}

export default quickSort
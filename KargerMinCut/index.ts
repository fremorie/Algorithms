export type AdjacencyList = Array<[string, Array<string>]>

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max)
}

export const kargerMinCut = (adjacencyList: AdjacencyList): AdjacencyList => {
    const verticesCount = adjacencyList.length

    if (verticesCount <= 2) {
        return adjacencyList
    }

    const baseIndex = getRandomInt(verticesCount - 1) // 0 - 199
    const [base, vs] = adjacencyList[baseIndex] // [vertexLabel, [v1, v2, v3, ...]]
    const contractedNode = vs[getRandomInt(vs.length - 1)] // '23'

    const contractedNodeIndex = adjacencyList.findIndex((row) => row[0] === contractedNode) // 23

    if (contractedNodeIndex === -1) {
        throw new Error('Something went wrong')
    } else {
        adjacencyList[baseIndex] = [
            base,
            [
                ...adjacencyList[baseIndex][1],
                ...adjacencyList[contractedNodeIndex][1]
            ].filter(x => x !== contractedNode && x !== base)
        ]
    }

    adjacencyList = adjacencyList.map((row) => {
        const [vertex, neighbours] = row

        return [vertex, neighbours.map((x) => x === contractedNode ? base : x)] as [string, Array<string>]
    }).filter((row) => {
        const [vertex, neighbours] = row

        return neighbours.length > 0 && vertex !== contractedNode
    })

    return kargerMinCut(adjacencyList)
}
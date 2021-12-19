function solution(lines) {
    const xList = []
    const yList = []

    for(let i = 0 ; i < lines.length ; i++) {
        for(let j = i + 1 ; j < lines.length ; j++) {
            const [A, B, E] = lines[i]
            const [C, D, F] = lines[j]

            const denominator = A * D - B * C

            if(denominator === 0) continue

            const x = (B * F - E * D) / denominator
            const y = (E * C - A * F) / denominator

            if((Number.isInteger(x) && Number.isInteger(y)) === false) continue
            xList.push(x)
            yList.push(y)
        }
    }

    const minX = Math.min(...xList)
    const minY = Math.min(...yList)
    const maxX = Math.max(...xList)
    const maxY = Math.max(...yList)

    const xLength = maxX - minX
    const yLength = maxY - minY


    const answer = []

    for(let i = 0 ; i < yLength + 1 ; i++) {
        answer.push(new Array(xLength + 1).fill("."))
    }

    for(let i = 0 ; i < xList.length ; i++) {
        const transX = xList[i] - minX
        const transY = Math.abs(yList[i] - maxY)
        answer[transY][transX] = '*'
    }

    return answer.map(a => a.join(''))
}

function solution(grid) {
    const answer = [];
    const cyclePath = []

    grid.forEach((row) => {
        const newRow = []
        for(let i = 0 ; i < row.length ; i++) {
            const isVisitList = [false, false, false, false]
            newRow.push(isVisitList)
        }
        cyclePath.push(newRow)
    })

    const rowLength = grid.length
    const colLength = grid[0].length

    cyclePath.forEach((row, rowIndex) => {
        row.forEach((isVisitList, colIndex) => {
            isVisitList.forEach((isVisit, direct) => {
                if(!isVisit) {
                    let nextRowIndex = rowIndex
                    let nextColIndex = colIndex
                    let nextDirect = direct
                    let cnt = 0;
                    while(!cyclePath[nextRowIndex][nextColIndex][nextDirect]) {
                        cyclePath[nextRowIndex][nextColIndex][nextDirect] = true

                        if(nextDirect === 0) nextRowIndex--
                        else if(nextDirect === 1) nextColIndex++
                        else if(nextDirect === 2) nextRowIndex++
                        else if(nextDirect === 3) nextColIndex--

                        nextRowIndex = (nextRowIndex + rowLength) % rowLength
                        nextColIndex = (nextColIndex + colLength) % colLength
                        const nextDirectString = grid[nextRowIndex][nextColIndex]

                        if(nextDirectString === 'L') nextDirect = (nextDirect + 3) % 4
                        else if(nextDirectString === 'R') nextDirect = (nextDirect + 1) % 4

                        cnt++
                    }
                    answer.push(cnt)
                }
            })
        })
    })

    return answer.sort((a, b) => a - b);
}

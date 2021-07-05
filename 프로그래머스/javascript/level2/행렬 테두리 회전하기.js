function makeTable(rows, columns) {
    const newTable = []
    for(let i = 0 ; i < rows ; i++) {
        const temp = []
        for(let j = 1 ; j <= columns ; j++) {
            temp.push(j + i * columns)
        }
        newTable.push(temp)
    }
    
    return newTable
}

function transTable(table, startRow, startColumn, endRow, endColumn) {
    const temp = table[startRow][endColumn]
    const changedData = []
    
    for(let i = endColumn ; i > startColumn; i--) {
        changedData.push(table[startRow][i])
        table[startRow][i] = table[startRow][i-1]
    }
    
    for(let i = startRow ; i < endRow ; i++) {
        changedData.push(table[i][startColumn])
        table[i][startColumn] = table[i + 1][startColumn]
    }
    
    for(let i = startColumn ; i < endColumn ; i++) {
        changedData.push(table[endRow][i])
        table[endRow][i] = table[endRow][i+1]
    }
    
    for(let i = endRow ; i > startRow; i--) {
        changedData.push(table[i][endColumn])
        table[i][endColumn] = table[i-1][endColumn]
    }
    
    table[startRow + 1][endColumn] = temp
    
    return Math.min(...changedData)
}

function solution(rows, columns, queries) {
    var answer = [];
    const table = makeTable(rows,columns)

    queries.forEach((query) => {
        answer.push(transTable(table, query[0] - 1, query[1] - 1, query[2] - 1, query[3] - 1))
    })
    
    
    return answer;
}
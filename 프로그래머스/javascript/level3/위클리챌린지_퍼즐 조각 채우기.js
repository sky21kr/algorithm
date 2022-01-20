function isRange(x, y, SIZE) {
    return x >= 0 && x < SIZE && y >= 0 && y < SIZE
}

function findPiece(x, y, type, visitTable, table, SIZE) {
    const Q = [[x, y]]
    const comparisonValue = type === 'gameBoard' ? 0 : 1
    const moves = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    const pieces = []
    visitTable[x][y] = 1

    while(Q.length) {
        const [ currentX, currentY ] = Q.shift()
        pieces.push([currentX, currentY])

        for(let move of moves) {
            const nextX = currentX + move[0]
            const nextY = currentY + move[1]

            if(isRange(nextX, nextY, SIZE) &&
                visitTable[nextX][nextY] === 0 &&
                table[nextX][nextY] === comparisonValue) {
                visitTable[nextX][nextY] = 1
                Q.push([nextX, nextY])
            }
        }
    }

    return pieces
}

function transCorner(valueList) {
    const minX = Math.min(...valueList.map(v => v[0]))
    const minY = Math.min(...valueList.map(v => v[1]))

    return valueList.map(v => [v[0] - minX, v[1] - minY])
}

function rotate90(valueList) {
    const maxX = Math.max(...valueList.map(v => v[0]))

    return valueList.map((v) => [v[1], maxX - v[0]])
}

function isMatch(piece, space) {
    if(piece.length !== space.length) return false

    piece.sort((a, b) => {
        if(a[0] === b[0]) return a[1] - b[1]
        else return a[0] - b[0]
    })
    space.sort((a, b) => {
        if(a[0] === b[0]) return a[1] - b[1]
        else return a[0] - b[0]
    })


    for(let i = 0 ; i < piece.length ; i++) {
        if(piece[i][0] !== space[i][0] || piece[i][1] !== space[i][1]) return false
    }

    return true
}

function solution(game_board, table) {
    const SIZE = table.length
    const tableVisit = []
    const gameBoardVisit = []

    for(let i = 0 ; i < SIZE ; i++) {
        tableVisit.push(new Array(SIZE).fill(0))
        gameBoardVisit.push(new Array(SIZE).fill(0))
    }

    const pieceList = []
    const spaceList = []

    for(let i = 0 ; i < SIZE ; i++) {
        for(let j = 0 ; j < SIZE; j++) {
            if(table[i][j] === 1) {
                if(tableVisit[i][j] === 0) pieceList.push(findPiece(i, j, 'table', tableVisit, table, SIZE))
            }

            if(game_board[i][j] === 0) {
                if(gameBoardVisit[i][j] === 0) spaceList.push(findPiece(i, j, 'gameBoard', gameBoardVisit, game_board, SIZE))
            }
        }
    }

    const cornerPieceList = pieceList.map(piece => transCorner(piece))
    const cornerSpaceList = spaceList.map(space => transCorner(space))

    const spaceCheckList = new Array(cornerSpaceList.length).fill(0)

    const answer = cornerPieceList.map((cornerPiece) => {
        let rotateCornerPiece = cornerPiece
        for(let i = 0 ; i < 4; i++) {
            rotateCornerPiece = rotate90(rotateCornerPiece)
            const matchIndex = cornerSpaceList.findIndex((cornerSpace) => {
                return isMatch(rotateCornerPiece, cornerSpace)
            })

            if(matchIndex !== -1) {
                cornerSpaceList.splice(matchIndex, 1)
                return rotateCornerPiece.length
            }
        }
        return 0
    })

    return answer.reduce((arr, cur) => arr + cur);
}

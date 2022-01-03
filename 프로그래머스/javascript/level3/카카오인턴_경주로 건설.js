function solution(board) {
    // 0 위 1 오른쪽 2 아래 3 왼쪽
    const size = board.length

    for(let i = 0 ; i < size ; i++) {
        for(let j = 0 ; j < size ; j++) {
            if(board[i][j] === 0) board[i][j] = [0, 0, 0, 0]
        }
    }

    const move = [[-1, 0], [0, 1], [1, 0], [0, -1]]

    const Q = [[0, 0, 1], [0, 0, 2]]
    while(Q.length) {
        const [x, y, currentDir] = Q.shift()

        for(let i = -1 ; i <= 1 ; i++) { // 왼쪽으로 회전, 직진, 오른쪽으로 회전
            const moveDir = (currentDir + 4 + i) % 4
            const nextX = x + move[moveDir][0]
            const nextY = y + move[moveDir][1]

            if(nextX >= 0 && nextX < size && nextY >= 0 && nextY < size && board[nextX][nextY] !== 1) {
                const currentPrice = board[x][y][currentDir]

                if(i === 0) {
                    if(board[nextX][nextY][moveDir] === 0 || board[nextX][nextY][moveDir] > currentPrice + 100) {
                        board[nextX][nextY][moveDir] = currentPrice + 100
                        Q.push([nextX, nextY, moveDir])
                    }
                } else {
                    if(board[nextX][nextY][moveDir] === 0 || board[nextX][nextY][moveDir] > currentPrice + 600) {
                        board[nextX][nextY][moveDir] = currentPrice + 600
                        Q.push([nextX, nextY, moveDir])
                    }
                }
            }
        }
    }

    return Math.min(...board[size - 1][size - 1].filter(r => r))
}

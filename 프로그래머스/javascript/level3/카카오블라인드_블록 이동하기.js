function isNotVisit(x1, y1, dir, board) {
    return board[x1][y1][dir] === false
}

// 0 세로 1 가로
function solution(board) {
    let cnt = -1;
    const size = board.length

    const newBoard = board.map((row) => {
        return row.map((r) => {
            if(r === 0) return [false, false]
            else return r
        })
    })

    newBoard[0][0][1] = true

    const Q = [[0, 0, 1]]
    const moves = [[-1, 0], [0, 1], [1, 0], [0, -1]]

    while(Q.length) {
        cnt++
        let isPass = false
        let qLength = Q.length
        for(let i = 0 ; i < qLength ; i++) {
            let [x1, y1, dir] = Q.shift()

            newBoard[x1][y1][dir] = true
            let x2 = dir === 0 ? x1 + 1 : x1
            let y2 = dir === 1 ? y1 + 1 : y1

            if( (x2 === size - 1 && y2 === size - 1)) {
                isPass = true
                break
            }



            // 수평, 수직이동
            moves.forEach((move) => {
                const nextX1 = x1 + move[0]
                const nextY1 = y1 + move[1]
                const nextX2 = x2 + move[0]
                const nextY2 = y2 + move[1]

                const periodCheck1 = nextX1 >= 0 && nextX1 < size && nextY1 >= 0 && nextY1 < size
                const periodCheck2 = nextX2 >= 0 && nextX2 < size && nextY2 >= 0 && nextY2 < size

                if(periodCheck1 && periodCheck2) {
                    if(newBoard[nextX1][nextY1] !== 1 && newBoard[nextX2][nextY2] !== 1) {
                        if(newBoard[nextX1][nextY1][dir] === false) {
                            newBoard[nextX1][nextY1][dir] = true
                            Q.push([nextX1, nextY1, dir])
                        }
                    }
                }
            })

            // 회전
            if(dir === 0) {
                if(y1 + 1 < size && y2 + 1 < size) {
                    if(newBoard[x1][y1 + 1] !== 1 && newBoard[x2][y2 + 1] !== 1) {
                        if(isNotVisit(x1, y1, 1, newBoard)) {
                            newBoard[x1][y1][1] = true
                            Q.push([x1, y1, 1])
                        }

                        if(isNotVisit(x2, y2, 1, newBoard)) {
                            newBoard[x2][y2][1] = true
                            Q.push([x2, y2, 1])
                        }
                    }
                }

                if(y1 - 1 >= 0 && y2 - 1 >= 0) {
                    if(newBoard[x1][y1 - 1] !== 1 && newBoard[x2][y2 - 1] !== 1) {
                        if(isNotVisit(x1, y1 - 1, 1, newBoard)) {
                            newBoard[x1][y1 - 1][1] = true
                            Q.push([x1, y1 - 1, 1])
                        }

                        if(isNotVisit(x2, y2 - 1, 1, newBoard)) {
                            newBoard[x2][y2 - 1][1] = true
                            Q.push([x2, y2 - 1, 1])
                        }
                    }
                }
            } else if(dir === 1){
                if(x1 + 1 < size && x2 + 1 < size) {
                    if(newBoard[x1 + 1][y1] !== 1 && newBoard[x2 + 1][y2] !== 1) {
                        if(isNotVisit(x1, y1, 0, newBoard)) {
                            newBoard[x1][y1][0] = true
                            Q.push([x1, y1, 0])
                        }

                        if(isNotVisit(x2, y2, 0, newBoard)) {
                            newBoard[x2][y2][0] = true
                            Q.push([x2, y2, 0])
                        }
                    }
                }

                if(x1 - 1 >= 0 && x2 - 1 >= 0) {
                    if(newBoard[x1 - 1][y1] !== 1 && newBoard[x2 - 1][y2] !== 1) {
                        if(isNotVisit(x1 - 1, y1, 0, newBoard)) {
                            newBoard[x1 - 1][y1][0] = true
                            Q.push([x1 - 1, y1, 0])
                        }

                        if(isNotVisit(x2 - 1, y2, 0, newBoard)) {
                            newBoard[x2 - 1][y2][0] = true
                            Q.push([x2 - 1, y2, 0])
                        }
                    }
                }
            }
        }

        if(isPass) break
    }

    return cnt;
}

function solution(board, r, c) {
    const boardSize = 4
    let cardCnt = 0
    let cardObj = {}
    let cardList = []
    const totalCardOrderList = []

    function isRange(r, c) {
        return r >= 0 && r < boardSize && c >= 0 && c < boardSize
    }

    function isArrive(r1, c1, r2, c2) {
        return r1 === r2 && c1 === c2
    }

    board.forEach((row, rowIndex) => {
        row.forEach((card, colIndex) => {
            if(card !== 0) {
                cardCnt++
                if(cardObj[card]) cardObj[card].push([rowIndex, colIndex])
                else cardObj[card] = [[rowIndex, colIndex]]
            }
        })
    })

    for(let card in cardObj) {
        cardList.push(cardObj[card])
    }

    function makeCardOrder(cardList, currentCardList) {
        if(cardList.length === 0) totalCardOrderList.push(currentCardList)
        for(let i = 0 ; i < cardList.length ; i++) {
            const targetCard = cardList[i]
            const newCardList = [...cardList.slice(0, i), ...cardList.slice(i + 1)]
            makeCardOrder(newCardList, [...currentCardList, targetCard[0], targetCard[1]])
            makeCardOrder(newCardList, [...currentCardList, targetCard[1], targetCard[0]])
        }
    }

    function minCardToCard(r1, c1, r2, c2) {
        const moves = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        const isVisit = []
        for(let i = 0 ; i < boardSize ; i++) isVisit.push(new Array(boardSize).fill(0))

        const Q = [[r1, c1, 0]]

        while(Q.length) {
            const [ curX, curY, cnt ] = Q.shift()
            isVisit[curX][curY] = 1
            if(isArrive(curX, curY, r2, c2)) {
                board[curX][curY] = 0
                return cnt
            }

            for(let [mx, my] of moves) {
                let nextX = curX + mx
                let nextY = curY + my

                if(!isRange(nextX, nextY)) continue

                if(!isVisit[nextX][nextY]) {
                    isVisit[nextX][nextY] = 1
                    Q.push([nextX, nextY, cnt + 1])
                }

                let c_nextX = curX
                let c_nextY = curY
                while(1) {
                    let tempX = c_nextX + mx
                    let tempY = c_nextY + my

                    if(!isRange(tempX, tempY)) {
                        if(!isVisit[c_nextX][c_nextY]) {
                            Q.push([c_nextX, c_nextY, cnt + 1])
                            isVisit[c_nextX][c_nextY] = 1
                        }
                        break
                    } else if (board[tempX][tempY]) {
                        if(!isVisit[tempX][tempY]) {
                            Q.push([tempX, tempY, cnt + 1])
                            isVisit[tempX][tempY] = 1
                        }
                        break
                    }

                    c_nextX = tempX
                    c_nextY = tempY
                }
            }
        }
    }

    makeCardOrder(cardList, [])

    let answer = Infinity
    let originBoard = board.map(row => row.slice())

    totalCardOrderList.forEach(cardOrder => {
        let [currentR, currentC] = [r, c]
        let totalCnt = 0
        board = originBoard.map(row => row.slice())

        cardOrder.forEach(card => {
            totalCnt += minCardToCard(currentR, currentC, card[0], card[1]) + 1
            currentR = card[0]
            currentC = card[1]
        })

        answer = Math.min(answer, totalCnt)
    })

    return answer
}

function solution(places) {
    var answer = [];
    const moveXY = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    
    places.forEach((place, idx) => {
        const startList = []
        
        place.forEach((row, rowIdx) => {
            row.split("").forEach((target, colIdx) => {
                if(target === 'P') startList.push([colIdx, rowIdx])
            })
        })
        let isBreak = false
        
        if(startList.find(([startX, startY]) => {
            const Q = [[startX, startY, 0]]
            while(Q.length) {
                let [X, Y, cnt] = Q.pop()
                
                isBreak = moveXY.find(([moveX, moveY]) => {
                    const targetX = X + moveX
                    const targetY = Y + moveY
                    
                    if(targetX >= 0 && targetX <= 4 && targetY >= 0 && targetY <= 4) {
                        if (place[targetY][targetX] === 'O' && cnt < 1) Q.push([targetX, targetY, cnt + 1])
                        else if (place[targetY][targetX] === 'P' && !(targetX === startX && targetY === startY)) {
                            return true
                        }
                    }
                })         
                if(isBreak) break
            }
            if(isBreak) return true
        })) answer.push(0)
        else answer.push(1)
    })
    
    return answer;
}
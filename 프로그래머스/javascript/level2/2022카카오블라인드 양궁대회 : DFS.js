function calcScoreDiff(apeach, lion) {
    let lionScore = 0
    let apeachScore = 0
    for(let i = 0 ; i < lion.length ; i++) {
        if(lion[i] > apeach[i]) lionScore += 10 - i
        if(lion[i] < apeach[i]) apeachScore += 10 - i
    }

    return lionScore - apeachScore
}

function solution(n, info) {
    let maxScore = 0;
    let answer = [-1]

    function DFS(n, info, curIndex, result) {
        if(n === 0) {
            const newScore = calcScoreDiff(info, result)
            if(newScore > maxScore) {
                answer = result
                maxScore = newScore
            }
            return
        }

        if(curIndex === -1) {
            result[10] += n
            const newScore = calcScoreDiff(info, result)
            if(newScore > maxScore) {
                answer = result
                maxScore = newScore
            }
            return result
        }

        for(let i = curIndex ; i >= 0 ; i--) {
            if(info[i] + 1 <= n) {
                const newResult = result.slice()
                newResult[i] = info[i] + 1
                DFS(n - (info[i] + 1), info, i - 1,newResult)
            }
        }
    }

    DFS(n, info, 10, [0,0,0,0,0,0,0,0,0,0,0])
    return answer;
}

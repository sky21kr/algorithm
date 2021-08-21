function solution(n, results) {
    const resultMap = Array.from(Array(n), () => Array(n).fill(0))
    
    results.forEach((result) => {
        const [ winner, loser ] = result
        resultMap[winner - 1][loser - 1] = 1
    })
    
    
    for(let k = 0 ; k < n ; k++) {
        for(let i = 0 ; i < n ; i++) {
            for(let j = 0 ; j < n ; j++) {
                if(resultMap[i][k] !== 0 && resultMap[k][j] !== 0) {
                    resultMap[i][j] = Math.max(resultMap[i][j], resultMap[i][k] + resultMap[k][j])
                }
            }
        }
    }
    
    let answer = 0
    
    for(let i = 0 ; i < n ; i++) {
        let cnt = 0
        for(let j = 0 ; j < n ; j++) {
            if(resultMap[i][j] !== 0) cnt++
            if(resultMap[j][i] !== 0) cnt++
        }
        if(cnt == n -1) answer++
    }
    
    return answer
}
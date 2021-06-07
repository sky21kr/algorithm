function solution(lottos, win_nums) { 
    let zeroCnt = 0
    let sameCnt = 0
    
    lottos.forEach((lotto) => {
        if(lotto === 0) zeroCnt++
        if(win_nums.includes(lotto)) sameCnt++
    })
    
    const minRank = 7 - sameCnt 
    const maxRank = minRank - zeroCnt
    
    return [maxRank === 7 ? 6 : maxRank, minRank === 7 ? 6 : minRank];
}
function solution(gems) {
    var answer = [1, 100000];
    const gemsType = {}
    
    gems.forEach((gem) => {
        if(gemsType[gem] === undefined) gemsType[gem] = 0
    })
    
    const gemsNum = Object.keys(gemsType).length
    let cnt = 0
    let start = 0
    let end = 0
    
    while(end <= gems.length) {
        if(gemsNum > cnt) {
            if(gemsType[gems[end]] === 0) cnt++
            gemsType[gems[end]]++
            end++    
        } else if(gemsNum === cnt) {
            if(end - start === gemsNum) return [start + 1, end]
            else if(end - (start + 1) < answer[1] - answer[0]) answer = [start + 1, end]
            
            if(gemsType[gems[start]] === 1) cnt--
            gemsType[gems[start]]--
            start++
        }
    }
    
    
    return answer;
}
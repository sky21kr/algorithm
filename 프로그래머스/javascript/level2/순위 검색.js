function solution(info, query) {
    var answer = [];
    const groups = {}
    
    info.forEach((i) => {
        const splitCondition = i.split(" ")
        const key = splitCondition.slice(0,4)
        const score = Number(splitCondition[4])
        
        function addGroup(current, conditionList) {        
            if(conditionList.length === 0) {
                if(groups[current] === undefined) groups[current] = [score]
                else groups[current].push(score)
                
                return
            }
            addGroup(current + conditionList[0] ,conditionList.slice(1, conditionList.length))
            addGroup(current + '-', conditionList.slice(1, conditionList.length))
        }
        
        addGroup("", key)
        
    })
    
    for(let key in groups) groups[key].sort((a, b) => a - b)
    
    function lowerBound(items, target) {
        let start = 0
        let end = items.length
        while(start < end) {
            const mid = Math.floor((start + end) / 2)
            if(target > items[mid]) start = mid + 1
            else if (target <= items[mid]) end = mid
        }
        return end
    }
    
    query.forEach((q) => {
        const [ key, score ] = q.split(" and ").join("").split(" ")
        if(groups[key] === undefined) answer.push(0)
        else {
            const minIndex = lowerBound(groups[key], Number(score))
            answer.push(groups[key].length - minIndex)
        }
    })    
    return answer;
}
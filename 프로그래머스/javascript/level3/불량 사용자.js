function solution(user_id, banned_id) {
    var answer = 0;
    
    const banList = []
    
    function DFS(userIdList, bannedIdList, banIdList) {
        if(bannedIdList.length === 0) {
            banIdList.sort()
            
            let isOverlap = false
            
            for(let i = 0 ; i < banList.length ; i++) {
                if(JSON.stringify(banList[i]) === JSON.stringify(banIdList)) {
                    isOverlap = true
                    break
                }
            }
            
            if(!isOverlap) {
                answer++
                banList.push(banIdList)
            }
            
            return
        }
        
        const targetBannedId = bannedIdList.shift()
        
        for(let i = 0 ; i < userIdList.length ; i++) {
            const targetUserId = userIdList[i]
            
            if(targetBannedId.length === targetUserId.length) {
                let isCandidate = true
                
                for (let j = 0 ; j < targetUserId.length ; j++) {
                    if(targetBannedId[j] === '*') continue
                    if(targetBannedId[j] !== targetUserId[j]) {
                        isCandidate = false
                    }
                }
                
                if(isCandidate) {
                    const newUserIdList = userIdList.slice()
                    newUserIdList.splice(i, 1)
                    DFS(newUserIdList, [...bannedIdList], [...banIdList, targetUserId])
                }
            }
        }
    }
    
    DFS(user_id, banned_id, [])
    
    return answer;
}
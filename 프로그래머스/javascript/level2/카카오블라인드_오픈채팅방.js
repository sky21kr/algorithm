function solution(record) {
    const userInfo = {}
    const act = []
    
    
    record.forEach((r) => {
        const [state, id, nickName] = r.split(" ")
        
        if(state !== 'Change') {
            act.push([state, id])
        }
        
        if(state === 'Enter' || state === 'Change') userInfo[id] = nickName
    })
    return act.map(([state, id]) => userInfo[id] + (state === 'Enter' ? '님이 들어왔습니다.' : '님이 나갔습니다.'))
}
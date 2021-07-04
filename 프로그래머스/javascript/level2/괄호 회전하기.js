function solution(s) {
    var answer = 0;
    const open = "([{"
    const close = ")]}"
    let newS = s.split('')
    
    for(let i = 0 ; i < newS.length ; i += 1) {
        const temp = []
        let flag = true;
        for(let j = 0 ; j < newS.length ; j+= 1) {
            const closeIndex = close.indexOf(newS[j])
            if(temp.length === 0 && closeIndex !== -1) {
                flag = false;
                break;
            } else {
                if(closeIndex !== -1) {
                    if(open.indexOf(temp[temp.length - 1]) === close.indexOf(newS[j])) temp.pop()
                    else {
                        flag = false;
                        break;
                    }
                } else {
                    temp.push(newS[j])
                }
            }    
        }
        if(flag && temp.length === 0) {
            answer++;
        }
        newS.unshift(newS.pop())
    }
    
    return answer;
}
function checkRow(targetX, targetY, list) {
    let cnt = 0
    return (list.find((elem) => {
        const [x, y, a] = elem
        if(x === targetX && y === targetY - 1 && a === 0) return true
        if(x === targetX + 1 && y === targetY - 1 && a === 0) return true
        if((x === targetX - 1 && y === targetY && a === 1)) cnt++
        if((x === targetX + 1 && y === targetY && a === 1)) cnt++
    }) || cnt === 2)
}

function checkCol(targetX, targetY, list) {
    if(targetY === 0) return true
    else {
        return list.find((elem) => {
            const [x, y, a] = elem
            if(x === targetX && y === targetY && a === 1) return true
            if(x === targetX && y === targetY - 1 && a === 0) return true
            if(x === targetX - 1 && y === targetY && a === 1) return true
        })
    }
}

// x, y, 종류(0 기둥, 1 보), 설치(0 삭제, 1 설치)
function solution(n, build_frame) {
    var answer = [];
    
    build_frame.forEach((bf) => {
        const [x, y, a, b] = bf
        const target = [x, y, a]
        
        if (b === 1) {
            answer.push(target)
        } else {
            answer = answer.filter((elem) => {
                if(x === elem[0] && y === elem[1] && a === elem[2]) return false
                return true
            })
        }
        const flag = answer.find((elem, idx, origin) => {
            const [x, y, a] = elem
            if(a === 0) {
                if(!checkCol(x, y, origin)) return true
            } else {
                if(!checkRow(x, y, origin)) return true
            }
        })
        
        if(flag) {
            if(b === 1) {
                answer.pop()
            } else {
                answer.push(target)
            }
        }
    })
    
    answer.sort((a, b) => {
        if(a[0] !== b[0]) return a[0] - b[0]
        else if(a[1] !== b[1]) return a[1] - b[1]
        else return a[2] - b[2]
    })
    
    return answer;
}
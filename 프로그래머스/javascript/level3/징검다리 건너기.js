function solution(stones, k) {
    let answer = 0
    let left = 1
    let right = 200000000
    let mid = 0
    
    while(left <= right) {
        mid = Math.floor((left + right) / 2)
        let cnt = 0
        let flag = false
        
        for(let i = 0 ; i < stones.length ; i++) {
            if(stones[i] >= mid) cnt = 0
            else cnt++
            
            if(cnt === k) {
                flag = true
                break
            } 
        }
        
        if(flag) {
            right = mid - 1
        } else {
            left = mid + 1
            answer = mid
        }
    }
    
    return answer
}
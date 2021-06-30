function check(targetNumber) {
    let cnt = 0
    
    for(let i = 1 ; i <= targetNumber ; i++) {
        if(targetNumber % i === 0) cnt++
    }
    
    return cnt % 2 === 0
}

function solution(left, right) {
    var answer = 0;
    
    for(let i = left ; i <= right ; i++) {
        if(check(i)) answer += i;
        else answer -= i;
    }
    
    return answer;
}
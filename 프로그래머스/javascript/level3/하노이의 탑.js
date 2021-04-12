// https://shoark7.github.io/programming/algorithm/tower-of-hanoi

function solution(n) {
    var answer = [];
    
    function hanoi(cnt, start, end, mid) {
        if(cnt === 1) answer.push([start, end])
        else {
            hanoi(cnt - 1, start, mid, end)
            answer.push([start, end])
            hanoi(cnt - 1, mid, end, start)
        }
    }
    
    hanoi(n, 1, 3, 2)
    return answer;
}
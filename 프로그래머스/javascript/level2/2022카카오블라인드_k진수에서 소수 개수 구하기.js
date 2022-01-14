function isPrime(num) {
    if(num === 1) return false
    for(let i = 2 ; i <= Math.sqrt(num); i++) {
        if( num % i === 0) return false
    }
    return true
}

function solution(n, k) {
    var answer = 0;
    n.toString(k).split("0").forEach(num => {
        if(num !== '' && isPrime(Number(num))) answer++
    })
    return answer;
}

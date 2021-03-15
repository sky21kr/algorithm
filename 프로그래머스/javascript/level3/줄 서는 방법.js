function solution(n, k) {
    var answer = [];
    const arr = Array.from({length: n}, (_, i) => i + 1)
    
    let fac = 1
    arr.forEach((a) => fac *= a)
    k--
    
    while(arr.length) {
        fac = fac / arr.length
        let element = arr[Math.floor(k / fac)]
        answer.push(element)
        k = k % fac
        arr.splice(arr.indexOf(element), 1)
    }
    
    return answer;
}
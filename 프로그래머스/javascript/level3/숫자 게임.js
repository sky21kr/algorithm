function solution(A, B) {
    A.sort((a, b) => b - a)
    B.sort((a, b) => b - a)
    
    let bIndex = 0
    let answer = 0
    
    for(let aIndex = 0 ; aIndex < A.length ; aIndex++) {
        if(A[aIndex] < B[bIndex]) {
            answer++
            bIndex++
        }
    }
    
    return answer
}
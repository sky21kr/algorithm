function solution(a) {
    var answer = 0;
    const leftMinArr = []
    const rightMinArr = []
    let leftMin = a[0]
    let rightMin = a[a.length - 1]
    
    for(let i = 0 ; i < a.length ; i++) {
        if(leftMin > a[i]) leftMin = a[i]
        leftMinArr.push(leftMin)
        
        if(rightMin > a[a.length - 1 - i]) rightMin = a[a.length - 1 - i]
        rightMinArr.push(rightMin)
    }
    
    rightMinArr.reverse() // unshift는 성능이 안좋다. 시작 부분에 추가되며 항상 메모리 재할당이 일어나기 때문
    
    for(let i = 0 ; i < a.length ; i++) {
        if(a[i] === leftMinArr[i] || a[i] === rightMinArr[i]) answer++
    }
    
    return answer;
}
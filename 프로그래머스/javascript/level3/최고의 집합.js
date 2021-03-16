function solution(n, works) {
    let sortedWorks = works.sort((a, b) => b - a)

    while(n) {
        const standard = sortedWorks[0]
        
        if(standard === 0) break
        
        for(let i = 0 ; i < sortedWorks.length ; i++) {
            if(standard === sortedWorks[i]) {
                n--
                sortedWorks[i]--
            }
            if( n === 0 ) break
        }
    }
    
    return sortedWorks.reduce((acc, cur) => {
        return acc + (cur * cur)
    }, 0)
}
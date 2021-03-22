function solution(n, stations, w) {
    var answer = 0;
    let start = 1
    const range = 2 * w + 1
    
    stations.sort((a, b) => a - b)
    stations.forEach((station) => {
        let stationStart = station - w
        let stationEnd = station + w
        
        if(start < stationStart) {
            const dif = stationStart - start
            answer += Math.ceil(dif/range)
        }
        
        start = stationEnd + 1
    })
        
    if(start <= n) {
        const dif = n + 1 - start
        answer += Math.ceil(dif/range)
    }

    return answer;
}
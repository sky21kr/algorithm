function solution(n, money) {
    // dfs 효율성 실패 거스름돈 100000원, 화폐단위 100종류
    // function dfs(current, nextMoney) {
    //     if(current === n) answer++
    //     nextMoney.forEach((m, idx) => {
    //         if(current + m <= n) dfs(current + m, nextMoney.slice(idx))
    //     })    
    // }
    // dfs(0, money)
    
    // DP 효율성 통과
    let DP = Array.from({length: n + 1}, () => 0)
    DP[0] = 1
    
    money.forEach((m) => {
        for(let i = m ; i < n + 1 ; i++) {
            DP[i] += DP[i-m] % 100000007
        }
    })
    
    return DP[n];
}
function solution(n, s, a, b, fares) {
    const table = Array.from(Array(n), () => Array(n).fill(Infinity))

    for(let i = 0 ; i < n ; i++) table[i][i] = 0

    fares.forEach((fare) => {
        const [x, y, cost] = fare
        table[x - 1][y - 1] = cost
        table[y - 1][x - 1] = cost
    })

    for(let k = 0 ; k < n ; k++) {
        for(let i = 0 ; i < n ; i++) {
            for(let j = 0 ; j < n ; j++) {
                table[i][j] = Math.min(table[i][k] + table[k][j], table[i][j])
            }
        }
    }

    let answer = table[s - 1][a - 1] + table[s - 1][b - 1]

    for(let i = 0 ; i < n ; i++) {
        answer = Math.min(answer, table[s - 1][i] + table[i][a - 1] + table[i][b - 1])
    }

    return answer;
}

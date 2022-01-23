function solution(a, edges) {
    const adj = {}
    let sum = 0
    const visit = []

    a.forEach((el, index) => {
        sum += el
        visit.push(0)
        adj[index] = []
    })

    if(sum !== 0) return -1

    edges.forEach((edge) => {
        const [a, b] = edge
        adj[a].push(b)
        adj[b].push(a)
    })

    let answer = 0n
    const stack = [[0, -1]]

    while(stack.length) {
        const [ current, parent ] = stack.pop()

        if(visit[current]) {
            a[parent] += a[current]
            answer += BigInt(Math.abs(a[current]))
        } else {
            stack.push([current, parent])
            visit[current] = 1

            adj[current].forEach(nextNode => {
                if(!visit[nextNode]) stack.push([nextNode, current])
            })
        }
    }

    return answer
}

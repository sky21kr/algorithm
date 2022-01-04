function solution(n, weak, dist) {
    let maxleftFriendCnt = -1

    function DFS(dist, weak) {
        if(maxleftFriendCnt > dist.length) return
        if(weak.length === 0) {
            maxleftFriendCnt = dist.length
            return
        }
        if(dist.length === 0) return

        const nextDist = dist.pop()

        weak.forEach(weakStart => {
            const weakEnd = weakStart + nextDist

            const nextWeak = weak.filter(w => {
                if((w >= weakStart && w <= weakEnd) || (w + n >= weakStart && w + n <= weakEnd))
                    return false
                return true
            })

            DFS([...dist], nextWeak)
        })
    }

    DFS([...dist], weak)
    return maxleftFriendCnt !== -1 ? dist.length - maxleftFriendCnt : -1
}

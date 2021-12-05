function solution(k, dungeons) {
    let answer = 0;

    function DFS(k, dungeons, cnt) {
        let isMax = true
        for(let i = 0 ; i < dungeons.length ; i++) {
            if(dungeons[i][0] <= k) {
                DFS(k - dungeons[i][1], [...dungeons.slice(0, i), ...dungeons.slice(i + 1)] , cnt + 1)
                isMax = false
            }
        }

        if(isMax) answer = Math.max(answer, cnt)
    }

    DFS(k, [...dungeons], 0)
    
    return answer;
}

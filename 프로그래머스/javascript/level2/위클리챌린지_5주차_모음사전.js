function solution(word) {
    const keyword = ['A', 'E', 'I', 'O', 'U']
    const list = []

    function DFS(word, depth) {
        list.push(word)
        if(depth === 5) return

        keyword.forEach((k) => {
            DFS(word + k, depth + 1)
        })
    }

    DFS('', 0)

    return list.indexOf(word);
}

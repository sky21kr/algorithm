function solution(n) {
    var answer = 0;
    
    function makeChaseBoard(length) {
        return Array.from(Array(length), () => Array(length).fill(false))
    }
    
    const chaseBoard = makeChaseBoard(n)
    
    function NQ(board, level) {
        if(level === board.length) {
            answer++
            return
        }
        
        board[level].forEach((elem, idx) => {
            if(!elem) {
                const boardCopy = board.map((b) => b.slice())
                
                for(let i = 1 ; i < board.length - level ; i++) {
                    boardCopy[level + i][idx] = true
                    if(idx - i >= 0) boardCopy[level + i][idx - i] = true
                    if(idx + i < board.length) boardCopy[level + i][idx + i] = true                    
                }
                
                NQ(boardCopy, level + 1)
            }
        })
    }
    
    NQ(chaseBoard, 0)
    
    return answer;
}
function solution(board) {
    const moves = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    let curPos = []
    
    // 시작지점 위치 찾기 및 string을 배열로 변환
    board = board.map((row, rowIndex) => {
        const rIndex = row.indexOf('R');
        
        if(rIndex !== -1) {
            curPos = [rowIndex, rIndex]
        }
        
        return row.split('');
    })

    let Q = [curPos];
    let count = 0;
    
    while(Q.length) {
        let tempQ = [];
        count++;
        
        while(Q.length) {
            // 이번 큐를 모두 소진시킬 때 까지 반복
            const [x, y] = Q.pop();
            
            for(const [moveX, moveY] of moves) {
                let [curX, curY] = [x, y];
                
                while(1) {
                    // 이동하기로 한 방향 끝까지 이동시키는 로직
                    const nextLocation = board[curX + moveX]?.[curY + moveY];
                    const curLocation = board[curX][curY];
                    
                    if(!nextLocation || nextLocation === 'D') {
                    	// 다음 위치가 배열 바깥이거나 'D'일 경우
                        
                        if(curLocation === 'G') {
                            return count;
                        }
                        
                        if(curLocation !== 'R') {
                            board[curX][curY] = 'R';
                            tempQ.push([curX, curY])
                        }

                        break;
                    } else {
                        [curX, curY] = [curX + moveX, curY + moveY];
                    }
                }
            }
        }
        
        Q = tempQ
    }   
    
    // 도달하지 못했는데 더이상 움직일 수 없는 경우 -1 리턴
    return -1;
}
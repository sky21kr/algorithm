function solution(s) {
    var answer = [];

    s.forEach(_s => {
        const stack = []
        const arr  = _s.split("")
        let cnt = 0

        for(let i = 0 ; i < arr.length ; i++) {
            const third = arr[i]
            stack.push(third)

            if(stack.length >= 3) {
                const second = stack[stack.length - 2]
                const first = stack[stack.length - 3]

                if(first == 1 && second == 1 && third == 0) {
                    stack.pop()
                    stack.pop()
                    stack.pop()
                    cnt++
                }
            }
        }

        const list = []
        while(stack.length) {
            if(stack[stack.length - 1] == 1) list.push(stack.pop())
            else break
        }

        const target = []
        while(cnt--) target.push(1, 1, 0)

        answer.push([...stack, ...target, ...list].join(""))
    })

    return answer;
}

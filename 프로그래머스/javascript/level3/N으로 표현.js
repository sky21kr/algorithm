function solution(N, number) {
    var answer = 0;

    const sets = [new Set()]

    for(let i = 1 ; i <= 8 ; i++) {
        sets.push(new Set([Number(N.toString().repeat(i))]))
        for(let j = 1; j < i ; j++) {
            for(let arg1 of sets[j]) {
                for(let arg2 of sets[i-j]) {
                    sets[i].add(arg1 + arg2)
                    sets[i].add(arg1 - arg2)
                    sets[i].add(arg1 * arg2)
                    if(arg2) {
                        sets[i].add(Math.floor(arg1 / arg2))
                    }
                }
            }
        }

        if(sets[i].has(number)) return i
    }


    return -1;
}

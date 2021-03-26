function solution(s)
{
    var answer = 1;
    for(let i = 0 ; i < s.length ; i += 0.5) {
        let j
        if(Math.ceil(i) === i) j = 0
        else j = 0.5
        
        while( i - j >= 0 && i + j < s.length) {
            const left = s[i - j]
            const right = s[i + j]
            if(left === right) answer = Math.max(answer, 2 * j + 1)
            else break
            j++
        }
    }

    return answer;
}
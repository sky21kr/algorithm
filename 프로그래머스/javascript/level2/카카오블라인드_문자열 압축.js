function solution(s) {

    let answer = s.length

    for(let i = 1 ; i <= Math.ceil(s.length/2); i++) {
        let startIndex = 0
        let endIndex = i
        let preString = ""
        let newString = ""
        let combo = 1

        while(1) {
            if( preString === s.substring(startIndex, endIndex) ) {
                combo++
            } else {
                if(combo === 1) newString += preString
                else newString += (combo + preString)
                preString = s.substring(startIndex, endIndex)
                combo = 1
            }

            if(endIndex >= s.length) {
                if( combo !== 1 ) newString += (combo + preString)
                else newString += s.substring(startIndex, endIndex)
                break
            }

            startIndex = endIndex
            endIndex = startIndex + i
        }
        answer = Math.min(answer, newString.length)
    }
    return answer;
}

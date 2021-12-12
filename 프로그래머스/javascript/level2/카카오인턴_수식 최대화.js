function solution(expression) {
    const operandCandidates = [
        ['*','+','-'],
        ['*','-','+'],
        ['+','*','-'],
        ['+','-','*'],
        ['-','*','+'],
        ['-','+','*']
    ]
    const cand = []

    operandCandidates.forEach((operandCandidate) => {
        let expressionArray = expression.split(/(\D)/)
        operandCandidate.forEach((op) => {
            while(expressionArray.includes(op)) {
                const idx = expressionArray.indexOf(op)
                expressionArray.splice(idx - 1, 3, eval(expressionArray.slice(idx - 1, idx + 2).join('')))
            }
        })
        cand.push(Math.abs(expressionArray))
    })

    return Math.max(...cand);
}

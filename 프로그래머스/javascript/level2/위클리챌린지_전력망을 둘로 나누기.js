function solution(n, wires) {
    var answer = 100;

    const wireAdj = {}
    const visit = new Array(n).fill(false)

    wires.forEach((wire) => {
        if(wireAdj[wire[0]]) wireAdj[wire[0]].push(wire[1])
        else wireAdj[wire[0]] = [wire[1]]
        if(wireAdj[wire[1]]) wireAdj[wire[1]].push(wire[0])
        else wireAdj[wire[1]] = [wire[0]]
    })

    for(let i = 0 ; i < wires.length ; i++) {
        const deadWire = wires[i]
        const newVisit = [ ...visit ]

        const Q = [1]
        while(Q.length) {
            const target = Q.shift()
            newVisit[target - 1] = true
            for(let i = 0 ; i < wireAdj[target].length ; i++) {
                if(deadWire.includes(target) && deadWire.includes(wireAdj[target][i])) continue
                if(!newVisit[wireAdj[target][i] - 1]) Q.push(wireAdj[target][i])
            }
        }

        const connectNum = newVisit.filter((visit) => (visit)).length
        const diff = Math.abs(n - 2 * connectNum)
        answer = Math.min(answer, diff)
    }

    return answer;
}

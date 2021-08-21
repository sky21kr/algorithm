function solution(tickets) {
    tickets.sort((a, b) => {
        if(a[0] !== b[0]) {
            if(a[0] > b[0]) return 1
            else return -1
        } else {
            if(a[1] > b[1]) return 1
            else return -1
        }
    })
    
    function flight(airport, route, restTickets) {
        route.push(airport)
        if(restTickets.length === 0) return route
        
        for(let i = 0 ; i < restTickets.length ; i++) {
            const nextAirportList = []
            if(restTickets[i][0] === airport) {
                const newRestTickets = restTickets.slice()
                newRestTickets.splice(i, 1)
                
                const answer = flight(restTickets[i][1], [...route], newRestTickets)
                if(answer) return answer
            }
        }        
    }
    
    return flight("ICN", [], tickets)
}
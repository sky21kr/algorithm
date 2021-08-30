function solution(table, languages, preference) {
    const scores = table.map((jobs) => {
        const tableSplit = jobs.split(" ")
        const job = tableSplit[0]
        const langRank = tableSplit.slice(1)
        
        let score = 0
        
        languages.forEach((language, idx) => {
            const s = 5 - langRank.indexOf(language)
            
            if(s < 6) score += preference[idx] * s
        })
        
        return [job, score]
    })
    
    scores.sort((a, b) => {
        if(a[1] !== b[1]) return b[1] - a[1]
        else return b[0] > a[0] ? -1 : 1
    })
    
    return scores[0][0]
}
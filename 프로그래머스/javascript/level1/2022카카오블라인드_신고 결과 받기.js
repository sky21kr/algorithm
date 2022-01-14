function solution(id_list, report, k) {
    const reportHistory = {}
    const reportedResult = {}
    const bannedList = []

    id_list.forEach(id => {
        reportHistory[id] = []
        reportedResult[id] = 0
    })

    const newReport = [...new Set(report)]

    newReport.forEach(r => {
        const [ reportUser, reportedUser ] = r.split(" ")
        reportHistory[reportUser].push(reportedUser)
        reportedResult[reportedUser] += 1
    })

    for(let userId in reportedResult) {
        if(reportedResult[userId] >= k) bannedList.push(userId)
    }

    const answer = id_list.map(id => {
        return reportHistory[id].filter(reportUser => bannedList.includes(reportUser)).length
    })

    return answer
}

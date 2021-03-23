function getTimeFormat(time) {
    const minutes = time % 60 >= 10 ? time % 60 : `0${time % 60}` 
    const hours = Math.floor(time / 60) >= 10 ? Math.floor(time / 60) : `0${Math.floor(time / 60)}`
    
    return `${hours}:${minutes}`
}

function solution(n, t, m, timetable) {
    timetable = timetable.map((time) => {
        const [hour, minute] = time.split(":")
        return Number(hour)*60 + Number(minute)
    })
    
    timetable.sort((a, b) => a - b)
    
    let busTime = 540
    
    for(let i = 0 ; i < n ; i++) {
        if(i == n - 1) {
            const cnt = timetable.filter((time) => busTime >= time).length
            if(cnt < m) return getTimeFormat(busTime)
            else return getTimeFormat(timetable[m-1] - 1)
        } else {
            for(let j = 0 ; j < m ; j++) {
                if(busTime >= timetable[0]) timetable.shift()
                else break
            }
        }
        busTime += t
    }
}
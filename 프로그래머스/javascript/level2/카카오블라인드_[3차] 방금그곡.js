function translation(string) {
    // C# S
    // D# T
    // F# P
    // G# Z
    // A# K
    let transString = ""

    for(let i = 0 ; i < string.length ; i++) {
        if(string[i] !== '#') transString += string[i]
        else {
            let str = ""
            if(string[i-1] === 'C') str = 'S'
            else if(string[i-1] === 'D') str = 'T'
            else if(string[i-1] === 'F') str = 'P'
            else if(string[i-1] === 'G') str = 'Z'
            else if(string[i-1] === 'A') str = 'K'

            transString = transString.slice(0, -1) + str
        }
    }

    return transString
}

function solution(m, musicinfos) {
    const transM = translation(m);

    const musics = []

    musicinfos.forEach((musicinfo) => {
        const [startTime, endTime, title, notes] = musicinfo.split(',')
        const [startTimeHour, startTimeMinute] = startTime.split(':')
        const [endTimeHour, endTimeMinute] = endTime.split(':')

        const startTotalMinutes = Number(startTimeHour * 60) + Number(startTimeMinute)
        const endTotalMinutes = Number(endTimeHour * 60) + Number(endTimeMinute)

        const playTime = (endTotalMinutes - startTotalMinutes)

        const transNotes = translation(notes)
        let totalNotes = ""

        for(let i = 0 ; i < playTime ; i++) {
            totalNotes += transNotes[i % transNotes.length]
        }

        if(totalNotes.includes(transM)) musics.push([title, playTime])
    })

    if(musics.length === 0) return '(None)'
    else if(musics.length === 1) return musics[0][0]
    else {
        let maxPlayTime = -1
        let answer
        musics.forEach((music) => {
            if(maxPlayTime < music[1]) {
                maxPlayTime = music[1]
                answer = music[0]
            }
        })
        return answer
    }
}

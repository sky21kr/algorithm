function solution(lines) {
    const transLines = lines.map((line) => {
        const year = line.slice(0, 4)
        const month = line.slice(5, 7)
        const day = line.slice(8, 10)
        const hour = line.slice(11, 13)
        const minute = line.slice(14, 16)
        const second = line.slice(17, 19)
        const milliSecond = line.slice(20, 23)

        const time = line.slice(24, -1)

        const EndTime = new Date(year, month, day, hour, minute, second, milliSecond)
        const StartTime = new Date(new Date(EndTime).setMilliseconds(EndTime.getMilliseconds() - (time * 1000 - 1)))
        return [StartTime, EndTime]
    })

    const answer = transLines.map((line) => {
        const [StartTime, EndTime] = line

        const rangeStart = EndTime
        const rangeEnd = new Date(new Date(EndTime).setMilliseconds(EndTime.getMilliseconds() + 999))

        const sector = transLines.filter((targetLine, index) => {
            const [targetStartTime, targetEndTime] = targetLine

            if(!(targetEndTime < rangeStart || targetStartTime > rangeEnd)) return targetLine

        })
        return sector.length
    })

    return Math.max.apply(null, answer);
}

function transTime(time) {
    const [ hour, minute ] = time.split(":");
    return 60 * Number(hour) + Number(minute);
}

function calcFee(fees, time) {
    const [ defaultTime, defaultFee, unitTime, unitPrice ] = fees

    if(time >= defaultTime) return defaultFee + Math.ceil((time - defaultTime) / unitTime) * unitPrice
    else return defaultFee
}

function solution(fees, records) {
    const answer = []
    const history = {};

    records.forEach(record => {
        const [ time, number, status ] = record.split(" ")
        if(!history[number]) history[number] = { time: 0 }
        if (status === "IN") {
            history[number].inTime = transTime(time)
        } else if (status === "OUT") {
            if(history[number].time) history[number].time += transTime(time) - history[number].inTime
            else history[number].time = transTime(time) - history[number].inTime
            history[number].inTime = -1
        }
    })

    Object.keys(history).sort().forEach(carNum => {
        if(history[carNum].inTime !== -1) history[carNum].time += transTime("23:59") - history[carNum].inTime
        answer.push(calcFee(fees, history[carNum].time))
    })

    return answer
}

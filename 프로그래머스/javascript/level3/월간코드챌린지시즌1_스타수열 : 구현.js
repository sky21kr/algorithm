function solution(a) {
    const obj = {}
    const numbers = []
    a.forEach(num => {
        if(obj[num]) obj[num] += 1
        else {
            numbers.push(num)
            obj[num] = 1
        }
    })

    let answer = 0

    numbers.forEach(number => {
        if(obj[number] > (answer / 2)) {
            let length = 0
            let preAvailable = false

            for(let i = 0 ; i < a.length ; i++) {
                if(a[i] === number) {
                    if(preAvailable) {
                        preAvailable = false
                        length += 2
                    } else {
                        if(i + 1 >= a.length) break
                        else if(a[i + 1] !== number) {
                            length += 2
                            i++
                        } else {
                            preAvailable = false
                        }
                    }
                } else preAvailable = true
            }

            answer = Math.max(length, answer)
        }
    })

    return answer
}

function solution(numbers) {
    var answer = [];
    
    answer = numbers.map((number) => {
        if(number % 2 === 0) return number + 1
        else {
            let temp = 1
            let newNumber = number
            while(1) {
                if(newNumber % 2 === 0) {
                    number += temp - temp / 2
                    break
                } else {
                    temp *= 2
                    newNumber = Math.floor(newNumber / 2)
                }
            }
            return number
        }
    })
    
    return answer;
}
function solution(enroll, referral, seller, amount) {
    var answer = [];
    const networkObj = {}
    const moneyObj = {}
    
    for(let i = 0 ; i < enroll.length ; i++) {
        networkObj[enroll[i]] = referral[i]
        moneyObj[enroll[i]] = 0
    }
    
    seller.forEach((s, idx) => {
        let money = amount[idx] * 100
        while(s !== '-' && money > 0) {
            const refMoney = Math.floor(money * 0.1)
            const myMoney = money - refMoney
            
            moneyObj[s] += myMoney
            
            s = networkObj[s]
            money = refMoney
        }
    })
    
    enroll.forEach((e) => {
        answer.push(moneyObj[e])
    })
    
    return answer;
}
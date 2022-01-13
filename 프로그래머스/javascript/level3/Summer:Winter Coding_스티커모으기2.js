function solution(sticker) {
    if(sticker.length === 1) return sticker[0]

    const DP1 = []
    const DP2 = []

    DP1.push(sticker[0])
    DP1.push(Math.max(DP1[0], sticker[1]))

    for(let i = 2 ; i < sticker.length - 1 ; i++) {
        DP1.push(Math.max(sticker[i] + DP1[i-2], DP1[i-1]))
    }

    DP2.push(0)
    DP2.push(sticker[1])

    for(let i = 2 ; i < sticker.length ; i++) {
        DP2.push(Math.max(sticker[i] + DP2[i-2], DP2[i-1]))
    }

    return Math.max(DP1[DP1.length - 1], DP2[DP2.length - 1])
}

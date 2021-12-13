function solution(s) {
    return s.slice(2, s.length-2).split("},{").map((data) => {
        return data.split(',')
    }).sort((a,b) => a.length - b.length).reduce((pre, cur) => {
        const find = cur.find((c) => {
            if(pre.indexOf(c) === -1) return c
        })

        return [ ...pre, find]
    }).map((string) => Number(string))
}

function solution(word, pages) {
    const linkObj = {}
    pages.forEach((page, index) => {
        let metaTagReg = /<meta([^>]+)>/g
        let aTagReg = /<a([^>]+)>/g
        let currentLink
        let externalLink = []

        const defaultScore = page.split(/[^a-zA-Z]/)
            .filter(w => w.toLowerCase() === word.toLowerCase()).length

        page.match(metaTagReg).forEach((metaTag) => {
            const link = metaTag.match(/\"https:\/\/([^\"]+)"/g)
            if(link) currentLink = metaTag.match(/\"https:\/\/([^\"]+)"/g)[0]
        })

        if(page.match(aTagReg)) {
            page.match(aTagReg).forEach(aTag => {
                const link = aTag.match(/\"https:\/\/([^\"]+)"/g)
                if(link) externalLink.push(...link)
            })
        }

        linkObj[currentLink] = {
            index,
            externalLink,
            defaultScore,
            linkScore: 0,
        }
    })

    Object.keys(linkObj).forEach((link) => {
        linkObj[link].linkScore += linkObj[link].defaultScore

        linkObj[link].externalLink.forEach((el) => {
            if(linkObj[el]) linkObj[el].linkScore += linkObj[link].defaultScore / linkObj[link].externalLink.length
        })
    })

    let answer = 0
    let maxLinkScore = 0

    for(let link in linkObj) {
        const { linkScore, index } = linkObj[link]
        if(linkScore > maxLinkScore) {
            maxLinkScore = linkScore
            answer = index
        }
    }

    return answer;
}

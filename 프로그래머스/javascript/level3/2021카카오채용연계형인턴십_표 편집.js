const Node = function(idx, preNode) {
    this.idx = idx
    this.preNode = preNode
    this.nextNode = null
}

function solution(n, k, cmd) {
    const rootNode = new Node(0)
    let preNode = rootNode
    let currentNode = rootNode
    const trash = []

    for(let i = 1 ; i < n ; i++) {
        const nextNode = new Node(i, preNode)
        preNode.nextNode = nextNode

        preNode = nextNode

        if(i === k) currentNode = preNode
    }

    cmd.forEach(c => {
        let [ command, num ] = c.split(" ")
        if(command === 'D') {
            while(num--) currentNode = currentNode.nextNode
        } else if (command === 'U') {
            while(num--) currentNode = currentNode.preNode
        } else if (command === 'C') {
            trash.push(currentNode)
            if(currentNode.nextNode && currentNode.preNode) {
                currentNode.preNode.nextNode = currentNode.nextNode
                currentNode.nextNode.preNode = currentNode.preNode
                currentNode = currentNode.nextNode
            } else if (currentNode.nextNode) {
                currentNode.nextNode.preNode = null
                currentNode = currentNode.nextNode
            } else if (currentNode.preNode) {
                currentNode.preNode.nextNode = null
                currentNode = currentNode.preNode
            }
        } else if (command === 'Z') {
            const targetNode = trash.pop()

            if(targetNode.preNode && targetNode.nextNode) {
                targetNode.preNode.nextNode = targetNode
                targetNode.nextNode.preNode = targetNode
            } else if (targetNode.preNode) {
                targetNode.preNode.nextNode = targetNode
            } else if (targetNode.nextNode) {
                targetNode.nextNode.preNode = targetNode
            }
        }
    })

    const answer = new Array(n).fill('O')
    trash.map(t => answer[t.idx] = 'X')

    return answer.join("")
}

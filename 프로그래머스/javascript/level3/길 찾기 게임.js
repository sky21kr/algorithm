class BinaryTree {
    constructor(value, x) {
        this.value = value
        this.x = x
        this.leftNode = null
        this.rightNode = null
    }
    
    insert(value, x) {
        if( x < this.x ) {
            this.leftNode ? this.leftNode.insert(value, x) : this.leftNode = new BinaryTree(value, x)
        } else {
            this.rightNode ? this.rightNode.insert(value, x) : this.rightNode = new BinaryTree(value, x)
        }
    }
}

function preorder(BT, preorderArray) {
    if(BT) {
        preorderArray.push(BT.value)
        preorder(BT.leftNode, preorderArray)
        preorder(BT.rightNode, preorderArray)
    }
}

function postorder(BT, postorderArray) {
    if(BT) {
        postorder(BT.leftNode, postorderArray)
        postorder(BT.rightNode, postorderArray)
        postorderArray.push(BT.value)
    }
}

function solution(nodeinfo) {
    var answer = []
    
    const newNodeInfo = nodeinfo.map((node, idx) => [...node, idx + 1])
                            .sort((a, b) => {
                                if(b[1] !== a[1]) return b[1] - a[1]
                                else {
                                    b[0] - a[0]
                                }
                            })
    
    const BT = new BinaryTree(newNodeInfo[0][2], newNodeInfo[0][0])
    for(let i = 1 ; i < newNodeInfo.length ; i++) {
        BT.insert(newNodeInfo[i][2], newNodeInfo[i][0])
    }
    
    const preorderArray = []
    const postorderArray = []
    
    preorder(BT, preorderArray)
    postorder(BT, postorderArray)    

    return [preorderArray, postorderArray];
}
function makeExtendedLock(key, lock) {
    const keySize = key.length
    const lockSize = lock.length
    const extendedLockSize = lockSize + keySize * 2 - 2
    
    const extendedLock = Array.from(Array(extendedLockSize), () => Array(extendedLockSize).fill(0))
    
    for(let i = 0 ; i < lockSize ; i++) {
        for(let j = 0 ; j < lockSize ; j++) {
            extendedLock[i + keySize - 1][j + keySize - 1] = lock[i][j]
        }
    }
    
    return extendedLock
}

function rotateKey(key) {
    const keySize = key.length
    const newKey = Array.from(Array(keySize), () => Array(keySize).fill(0))
    
    for(let i = 0 ; i < keySize; i++) {
        for(let j = 0 ; j < keySize; j++) {
            newKey[i][j] = key[keySize - 1 - j][i]
        }
    }
    
    return newKey
}

function checkUnLock(key, extendedLock) {
    const keySize = key.length
    const lockSize = extendedLock.length + 2 - 2 * keySize
    
    for(let i = 0 ; i < lockSize ; i++) {
        for(let j = 0 ; j < lockSize ; j++) {
            if(extendedLock[i + keySize - 1][j + keySize - 1] !== 1) return false
        }
    }
    
    return true
}

function insertKey(x, y, key, extendedLock) {
    const keySize = key.length
    for(let i = 0 ; i < keySize ; i++) {
        for(let j = 0 ; j < keySize ; j++) {
            extendedLock[x + i][y + j] += key[i][j]
        }
    }
    return checkUnLock(key, extendedLock)
}

function loop(key, lock, extendedLock) {
    const endSize = key.length + lock.length - 1
    let isUnLock = false
    
    if(checkUnLock(key, extendedLock)) return true
    
    
    for(let i = 0 ; i < endSize ; i++) {
        for(let j = 0 ; j < endSize ; j++) {
            let cnt = 4
            let rotatedKey = key
            
            while(cnt--) {
                rotatedKey = rotateKey(rotatedKey)
                if(insertKey(i, j, rotatedKey, extendedLock.map(v => v.slice()))) {
                    isUnLock = true
                    break
                }
            }
            
            if(isUnLock) return true
        }
    }
    return false
}
function solution(key, lock) {
    const extendedLock = makeExtendedLock(key, lock)    
    return loop(key, lock, extendedLock)
}
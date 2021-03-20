# heapq 가지고 있는 요소를 push, pop할 때 마다 자동 정렬
# 힙 - 모든 부모 노드가 자식보다 작거나 같은 값을 갖는 이진 트리
# https://python.flowdas.com/library/heapq.html

import heapq

def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)
    
    while scoville[0] < K:
        try:
            heapq.heappush(scoville, heapq.heappop(scoville) + heapq.heappop(scoville) * 2)
        except:
            return -1
        answer += 1
    
    return answer

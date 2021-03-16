def solution(prices):
    answer = []
    for price_idx, price in enumerate(prices):
        cnt = 0
        for compare_prices_idx in range(price_idx + 1, len(prices)):
            cnt += 1
            if(price > prices[compare_prices_idx]):
                break
        answer.append(cnt)
    return answer

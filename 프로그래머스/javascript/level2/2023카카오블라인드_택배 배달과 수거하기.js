function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    
    const moveTruck = (map, cap) => {
        let endDistance = 0;
        
        while(map.length && cap) {
        	// 제일 먼 집의 배달 or 수거량
            const count = map[map.length - 1];
            
            // 최초로 배달 or 수거량이 있을 때 값을 저장한다.
            if(!endDistance && count) endDistance = map.length;
            
            if(count <= cap) {
            	// 더 배달 or 수거할 수 있다면 앞집으로 이동한다.
                cap -= count;
                map.pop();
            } else if (count > cap) {
            	// 더 배달 or 수거할 수 없다면 할수 있는 만큼만 처리한다.
                map[map.length - 1] = count - cap;
                break;
            }
        }
        
        // 최초로 배달 or 수거할 택배가 있을 때의 거리
        return endDistance;
    }
    
    while(deliveries.length || pickups.length) {       
        const deliveryDistance = moveTruck(deliveries, cap)
        const pickDistance = moveTruck(pickups, cap)
        
        // 배달, 수거 둘 중 먼 집의 거리로 갈때 올때 생각해서 2배를 하여 더해준다.
        answer += Math.max(deliveryDistance, pickDistance) * 2
    }
    
    return answer;
}
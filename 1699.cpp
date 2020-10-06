#include <iostream>
#include <algorithm>
#include <vector>
#include <cmath>

using namespace std;

int main(){
    int N;
    int DP[100001];

    cin >> N;

    for(int i = 0 ; i <= 100001; i++) {
        DP[i] = 100001;
    }

    DP[0] = 0;
    DP[1] = 1;

    for(int i = 1 ; i<= N; i++) {
        for(int j = 1 ; i-pow(j,2) >= 0 ; j++) {
            DP[i] = min(DP[i-int(pow(j,2))] + 1,DP[i]);
        }
    }

    cout << DP[N];
}

#include <iostream>
#include <algorithm>

using namespace std;

int main()
{
    int N;
    int P[10001];
    int DP[10001];
    cin >> N;

    for(int i = 1 ; i <= N ; i++) {
        cin >> P[i];
    }

    for(int i = 1 ; i <= N ; i++) {
        for(int j = 1 ; j <= i ; j++) {
            DP[i] = max(DP[i], DP[i-j] + P[j]);
        }
    }

    cout << DP[N];
}

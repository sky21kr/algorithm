#include <iostream>

using namespace std;

int main()
{
    int N;
    int T[15] = {0}, P[15] = {0}, DP[15] = {0};


    cin >> N;

    for (int i = 0 ; i < N ; i++) {
        cin >> T[i] >> P[i];
    }

    for (int i = 0 ; i <= N ; i++) {
        for(int j = i+T[i]; j <= N; j++)
        if( DP[j] < P[i] + DP[i]) {
            DP[j] = P[i] + DP[i];
        }

    }

    cout << endl;

    for (int i = 0 ; i <= N ; i++) {
        cout << i << " " << DP[i] << endl;
    }
}

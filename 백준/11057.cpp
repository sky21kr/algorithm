#include <iostream>

using namespace std;

int main()
{
    int N;
    int DP[1001][11] = { 0, };

    cin >> N;

    for(int i = 1; i <= 10; i++ ) {
        DP[1][i] = 1;
    }

    for(int i = 2 ; i <= N ; i++) {
        for(int j = 1 ; j <= 10 ; j++ ) {
            for( int k = 1 ; k <= j ; k++ ) {
                DP[i][j] += DP[i-1][k];
                DP[i][j] %= 10007;
            }
        }
    }

    int result = 0;
    for(int i = 1 ; i <= 10 ; i++) {
        result += DP[N][i];
    }

    cout << result % 10007;

    return 0;
}

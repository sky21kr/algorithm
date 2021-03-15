#include <iostream>
#include <algorithm>
#include <vector>
#include <cmath>

using namespace std;

int main(){
    int T;

    cin >> T;

    while(T--) {
        int N, M;
        int DP[31][31] = {0,};

        cin >> N >> M;

        for(int i = 0 ; i<= M ; i++) {
            for(int j = 0 ; j <= i ; j++ ) {
                if( j == 0 ) {
                    DP[i][j] = 1;
                } else {
                    DP[i][j] = DP[i-1][j-1] + DP[i-1][j];
                }
            }
        }

        cout << DP[M][N] << endl;
    }
}

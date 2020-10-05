#include <iostream>
#include <algorithm>
#include <vector>
#include <cmath>

using namespace std;

int main(){
    int T;

    cin >> T;

    while(T--) {
        int n;

        cin >> n;

        int sticker[2][100001] = {0,};
        int DP[2][100001] = {0,};

        for(int i = 0 ; i < 2 ; i++) {
            for(int j = 1 ; j <= n; j++) {
                cin >> sticker[i][j];
            }
            for(int i = 1 ; i <= n ; i++) {

            }
        }

        DP[0][1] = sticker[0][1];
        DP[1][1] = sticker[1][1];

        for(int i = 2 ; i <= n; i++) {
            DP[0][i] = sticker[0][i] + max(DP[1][i-1], DP[1][i-2]);
            DP[1][i] = sticker[1][i] + max(DP[0][i-1], DP[0][i-2]);
        }

        cout << max(DP[0][n], DP[1][n]) << endl;
    }
}

#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main()
{
    int T;
    vector<int> timer;
    vector<int> cnt;

    timer.push_back(300);
    timer.push_back(60);
    timer.push_back(10);

    cnt.push_back(0);
    cnt.push_back(0);
    cnt.push_back(0);

    cin >> T;

    for(int i = 0 ; i < 3 ;) {

        if( T >= timer[i] ) {
            T = T - timer[i];
            cnt[i]++;
        } else {
            i++;
        }
    }

    if( T != 0 ) {
        cout << -1;
    } else {
        for(int i = 0 ; i < 3; i++) {
            cout << cnt[i] << " ";
        }
    }

}

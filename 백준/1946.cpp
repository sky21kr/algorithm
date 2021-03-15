#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main()
{
    int T, N;
    int D, I;
    int cnt = 0;

    cin >> T;

    while(T--) {
        cnt = 0;
        cin >> N;

        vector<pair<int,int>> score;

        for(int i = 0 ; i < N ; i++) {
            cin >> D >> I;
            score.push_back(make_pair(D,I));

        }

        sort(score.begin(), score.end());

        int min = score[0].second;

        for(int i = 1 ; i < N ; i++) {
            if(score[i].second > min ) {
                cnt++;
            }

            if(min > score[i].second) {
                min = score[i].second;
            }
        }

        cout << N-cnt << endl;
    }
}

#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main()
{
    int N;
    vector<int> num;

    cin >> N;

    for(int i = 0 ; i < N; i++) {
        int temp;
        cin >> temp;
        num.push_back(temp);
    }

    vector<int> upDP;
    vector<int> downDP;

    upDP.push_back(1);
    downDP.push_back(1);

    for(int i = 1 ; i < N; i++) {
        if(num[i-1] < num[i]) {
            upDP.push_back(upDP[i-1] + 1);
            downDP.push_back(1);
        } else if(num[i-1] == num[i]){
            upDP.push_back(upDP[i-1] + 1);
            downDP.push_back(downDP[i-1] + 1);
        } else {
            upDP.push_back(1);
            downDP.push_back(downDP[i-1] + 1);
        }
    }

    cout << max(*max_element(upDP.begin(), upDP.end()), *max_element(downDP.begin(), downDP.end()));
}

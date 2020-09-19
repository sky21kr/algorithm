#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main()
{
    int N;

    cin >> N;

    vector<int> rope;

    int input;

    for( int i = 0 ; i < N ; i++) {
        cin >> input;
        rope.push_back(input);
    }

    sort(rope.begin(), rope.end());

    int result = rope[0]*N;

    for(int i = 1 ; i < N ; i++) {
        if( result < (N-i)*rope[i] )
            result = (N-i)*rope[i];
    }

    cout << result;
}

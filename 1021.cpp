#include <iostream>
#include <algorithm>

using namespace std;

int main()
{
    int N, M;
    bool Q[50];
    int arr[50];
    int head = 0;
    int cnt = 0;
    int result = 0;


    cin >> N >> M;

    int qSize = N;

    for( int i = 0 ; i < N ; i++ ) {
        Q[i] = true;
    }

    for( int i = 0 ; i < M ; i++ ) {
        cin >> arr[i];

        for( int j = head ; j <= N ; j++ ) {
            if( j == N) {
                j = 0;
            }

            if( j == arr[i] - 1 ) {
                Q[j] = false;

                if( cnt >= qSize - cnt ) {
                    result = result + qSize - cnt;
                } else {
                    result = result + cnt;
                }



                cnt = 0;
                qSize--;

                head = j + 1;
                break;
            }

            if( Q[j] == true ) {
                cnt++;
            }

        }
    }

    cout << result;
}

#include <iostream>

using namespace std;

int A[1000000];

int main()
{
    int N;

    int B, C;

    cin >> N;

    for(int i = 0 ; i < N ; i++) {
        cin >> A[i];
    }

    cin >> B >> C;

    long long result = 0;

    for(int i = 0 ; i < N ; i++) {
        A[i] -= B;
        result++;

        if(A[i] > 0) {
            result += (A[i] / C);

            if(A[i] % C != 0) {
                result++;
            }
        }

    }

    cout << result;

}

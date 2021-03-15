#include <iostream>

using namespace std;

int main()
{
    int N;
    int A[100];
    int big, small;
    int temp;

    cin >> N;

    for(int i = 0 ; i < N ; i++ ) {
        cin >> A[i];
    }

    for(int i = 1 ; i < N ; i++ ) {
        if(A[0] >= A[i]) {
            big = A[0];
            small = A[i];
        } else {
            big = A[i];
            small = A[0];
        }

        for(int j = small ; j > 0 ; j--) {
            if( big % j == 0 && small % j == 0) {
                temp = j;
                break;
            }
        }
        cout << temp;
        cout << A[0]/temp << "/"<< A[i]/temp << endl;

    }
}

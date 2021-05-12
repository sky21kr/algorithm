#include <iostream>
#include <algorithm>

using namespace std;

int main(){
    int n;

    cin >> n;

    long long nArray[100000];

    for(int i = 0 ; i < n ; i++) {
        cin >> nArray[i];
    }

    sort(nArray, nArray+n);

    int m;

    cin >> m;

    long long mArray[100000];

    for(int i = 0 ; i < m ; i++) {
        cin >> mArray[i];
    }

    for(int i = 0 ; i < m ; i++) {
        int start = 0;
        int end = n;
        long long target = mArray[i];
        bool flag = false;
        while(end >= start) {
            int mid = (start + end) / 2;

            if(target == nArray[mid]) {
                flag = true;
                break;
            } else if( target < nArray[mid] ) {
                end = mid - 1;
            } else if( target > nArray[mid]) {
                start = mid + 1;
            }
        }

        if(flag){
            cout << 1 << '\n';
        } else {
            cout << 0 << '\n';
        }
    }
}


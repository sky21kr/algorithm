#include <iostream>
#include <algorithm>

using namespace std;

int main()
{
    int T;
    int a, b;

    cin >> T;

    while(T--) {
        cin >> a >> b;

        b = b % 4;

        int result = 1;

        if( b == 0) {
            b = 4;
        }

        for(int i = 0 ; i < b ; i++) {
            result = (result * a) % 10;
        }

        if( result == 0 ) {
            cout << 10 << endl;
        } else {
            cout << result << endl;
        }
    }
}

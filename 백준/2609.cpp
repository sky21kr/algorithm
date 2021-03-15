#include <iostream>

using namespace std;

int main()
{
    int a, b;
    cin >> a >> b;

    for(int i = b ; ; i--) {
        if( a % i == 0 ) {
            if( b % i == 0) {
                cout << i << endl;
                break;
            }
        }
    }


    for(int i = 1 ; ; i++) {
        if( (a*i) % b == 0 ) {
            cout << a*i << endl;
            break;
        }
    }
}

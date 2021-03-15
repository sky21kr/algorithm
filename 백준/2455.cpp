#include <iostream>

using namespace std;

int main()
{
    int in[4] = { 0 };
    int out[4] = { 0 };

    for( int i = 0 ; i < 4 ; i++ ) {
         cin >> out[i] >> in[i];
    }

    int result = 0;
    int current = 0;


    for( int i = 0 ; i < 4 ; i++ ) {
        current = current - out[i];
        current = current + in[i];

        if( result <= current ) {
            result = current;
        }
    }

    cout << result;
}

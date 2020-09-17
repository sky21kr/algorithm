#include <iostream>
#include <string.h>
using namespace std;

int main()
{
    int money;
    int exchange[6] = { 500, 100, 50, 10, 5, 1};
    cin >> money;

    money = 1000 - money;

    int cnt = 0;

    for( int i = 0 ; i < sizeof(exchange)/sizeof(int) ; i++ ) {
        while(1) {
            if( money >= exchange[i] ) {
                money = money - exchange[i];
                cnt++;
            } else {
                break;
            }
        }
    }

    cout << cnt;
}

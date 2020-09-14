#include <iostream>

using namespace std;

int main()
{
    int N;
    int cntTwo = 0;
    int cntFive = 0;

    cin >> N;

    for(int i = 1 ; i <= N ; i++ ){
        int temp = i;
        while(1) {
            if(temp % 2 == 0) {
                temp /= 2;
                cntTwo++;
            } else {
                break;
            }
        }

        while(1) {
            if(temp % 5 == 0) {
                temp /= 5;
                cntFive++;
            } else {
                break;
            }
        }
    }

    if(cntTwo > cntFive) {
        cout << cntFive;
    } else {
        cout << cntTwo;
    }

}

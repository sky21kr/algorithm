#include <iostream>

using namespace std;

int main(){
    int N;

    scanf("%d", &N);

    int counting[10001] = {0,};

    for(int i = 0 ; i < N ; i++) {
        int temp;
        scanf("%d", &temp);
        counting[temp]++;
    }

    for(int i = 0 ; i < 10001 ; i++) {
        if(counting[i] != 0) {
            for(int j = 0 ; j < counting[i]; j++) {
                printf("%d\n", i);
            }
        }
    }
}


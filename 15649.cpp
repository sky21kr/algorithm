#include <iostream>
#include <algorithm>
#include <vector>
#include <cmath>

using namespace std;

bool visit[9] = {false,};
int history[9] = {0,};
int N, M;

void BFS(int cnt) {
    if(cnt == M) {
        for(int i = 1 ; i <= M ; i++) {
            cout << history[i] << " ";
        }
        cout << endl;
        return;
    }


    for(int i = 1 ; i <= N ; i++) {
        if(visit[i] == false) {
            visit[i] = true;
            history[cnt+1] = i;
            BFS(cnt+1);
            visit[i] = false;
        }
    }
}

int main(){

    cin >> N >> M;

    BFS(0);

}

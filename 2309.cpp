#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main()
{
    vector<int> dwarf;
    int sum = 0;
    for(int i = 0 ; i < 9 ; i++) {
        int input;
        cin >> input;
        dwarf.push_back(input);
        sum += input;
    }

    sort(dwarf.begin(), dwarf.end());

    for(int i = 0 ; i < 9 ; i++) {
        for(int j = i+1; j < 9 ; j++) {
            int result = sum;
            result = result - dwarf[i] - dwarf[j];
            if( result == 100 ) {
                dwarf.erase(dwarf.begin()+i);
                dwarf.erase(dwarf.begin()+j-1);
                for(int k = 0 ; k < 7 ; k++) {
                    cout << dwarf[k] << endl;
                }
                return 0;
            }
        }
    }
}

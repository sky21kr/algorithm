#include<iostream>
#include<algorithm>
using namespace std;

int main()
{
	string N;

	cin >> N;

	sort(N.begin(), N.end(), greater<char>());

	for (int i = 0; i < N.size(); i++)
	{
		cout << N[i];
	}
}
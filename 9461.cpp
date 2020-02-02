#include<iostream>
using namespace std;


int main()
{
	int T;
	long long P[100];
	int N;
	P[0] = 1;
	P[1] = 1;
	P[2] = 1;

	for (int i = 3; i < 100; i++)
	{
		P[i] = P[i - 2] + P[i - 3];
	}

	cin >> T;

	while (T--)
	{
		cin >> N;
		cout << P[N - 1] << endl;
	}
}
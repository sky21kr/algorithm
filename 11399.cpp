#include<iostream>
#include<algorithm>
using namespace std;

int main()
{
	int N;
	int P[1000];
	int time = 0;

	cin >> N;

	for (int i = 0; i < N; i++)
	{
		cin >> P[i];
	}

	sort(P, P + N);

	for (int i = 0; i < N; i++)
	{
		time += P[i] * (N - i);
	}

	cout << time;
}
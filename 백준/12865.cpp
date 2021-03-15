#include<iostream>
#include<algorithm>
using namespace std;

long long DP[101][100001] = { 0 };

int main()
{
	int N, K;
	int W[101];
	int V[101];

	cin >> N >> K;

	for (int i = 1; i <= N; i++)
	{
		cin >> W[i] >> V[i];
	}

	for (int i = 1; i <= N; i++)
	{
		for (int j = 1; j <= K; j++)
		{
			DP[i][j] = DP[i - 1][j];
			if (j >= W[i])
				DP[i][j] = max(DP[i - 1][j], DP[i - 1][j - W[i]] + V[i]);
		}
	}

	cout << DP[N][K];
}
#include<iostream>
using namespace std;

long long dp[100000];
long long result;

int main()
{
	int N;

	cin >> N;

	for (int i = 0; i < N; i++)
	{
		cin >> dp[i];
	}

	result = dp[0];

	for (int i = 1; i < N; i++)
	{
		if (dp[i - 1] + dp[i] > 0 && dp[i - 1] > 0)
			dp[i] += dp[i - 1];

		if (result < dp[i])
			result = dp[i];
	}

	cout << result;
}
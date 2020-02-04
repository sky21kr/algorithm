#include<iostream>
using namespace std;

int main()
{
	int N;
	cin >> N;

	long dp[100][10];
	long long result = 0;

	for (int i = 0; i < 10; i++)
	{
		dp[0][i] = 1;
	}

	for (int i = 1; i < N; i++)
	{
		dp[i][0] = dp[i - 1][1];
		for (int j = 1; j < 9; j++)
			dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1];
		dp[i][9] = dp[i - 1][8];

		for (int j = 0; j < 10; j++)
		{
			if (dp[i][j] >= 1000000000)
				dp[i][j] -= 1000000000;
		}
	}


	for (int i = 1; i < 10; i++)
	{
		result += dp[N - 1][i];
		if (result >= 1000000000)
			result -= 1000000000;
	}

	cout << result;
}
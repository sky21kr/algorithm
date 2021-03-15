#include<iostream>
using namespace std;

int main()
{
	int N;
	int A[1000];
	int dp[1000];
	int temp;

	cin >> N;

	for (int i = 0; i < N; i++)
	{
		cin >> A[i];
	}

	dp[0] = 1;

	for (int i = 1; i < N; i++)
	{
		temp = 0;
		for (int j = 0; j < i; j++)
		{
			if (A[i] > A[j])
			{
				if (temp < dp[j])
					temp = dp[j];
			}
		}
		dp[i] = temp + 1;
	}

	temp = 0;

	for (int i = 0; i < N; i++)
	{
		if (temp < dp[i])
			temp = dp[i];
	}
	cout << temp;
}
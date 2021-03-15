#include<iostream>
using namespace std;

int dp[1000001];

int main()
{
	int N;
	cin >> N;

	dp[1] = 0;
	dp[2] = 1;
	dp[3] = 1;

	for( int i = 4 ; i < N+1 ; i++ )
	{
		if( i % 6 == 0 )
		{
			dp[i] = min( dp[i/3] + 1, dp[i/2] + 1 );
			dp[i] = min( dp[i], dp[i-1] +1 );
		}
		else if( i % 3 == 0 )
			dp[i] = min( dp[i/3] + 1, dp[i-1] + 1 );
		else if( i % 2 == 0 )
			dp[i] = min( dp[i/2] + 1, dp[i-1] + 1 );
		else
			dp[i] = dp[i-1] + 1;
	}

	cout << dp[N];
}
#include<iostream>
using namespace std;

int main()
{
	int N;

	long long dp0[91]; //0���� ������ ��ģ��
	long long dp1[91]; //1�� ������ ��ģ��

	dp0[1] = 0;
	dp1[1] = 1;

	cin >> N;

	for (int i = 2; i <= N; i++)
	{
		dp0[i] = dp0[i - 1] + dp1[i - 1];
		dp1[i] = dp0[i - 1];
	}

	cout << dp0[N] + dp1[N];
}
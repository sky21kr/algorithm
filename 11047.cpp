#include<iostream>
using namespace std;

int main()
{
	int N, K;
	cin >> N >> K;

	int coin[10];

	for (int i = 0; i < N; i++)
	{
		cin >> coin[i];
	}

	int idx = N - 1;
	int result = 0;

	while (1)
	{
		for (int i = idx; i >= 0; i--)
		{
			if (K >= coin[i])
			{
				idx = i;
				break;
			}
		}

		for (int i = 1; ; i++)
		{
			if (i * coin[idx] > K)
			{
				result += (i - 1);
				K -= ((i - 1) * coin[idx]);
				break;
			}
		}

		if (K == 0)
			break;
	}

	cout << result;

}
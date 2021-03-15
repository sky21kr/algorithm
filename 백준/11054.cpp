#include<iostream>
using namespace std;

int main()
{
	int N;
	cin >> N;

	int arr[1000];
	int dp_up[1000];
	int dp_down[1000];
	int temp;

	for (int i = 0; i < N; i++)
	{
		cin >> arr[i];
	}

	for (int i = 0; i < N; i++)
	{
		temp = 0;
		for (int j = 0; j < i; j++)
		{
			if (arr[j] < arr[i])
			{
				if (dp_up[j] > temp)
					temp = dp_up[j];
			}
		}
		dp_up[i] = temp + 1;
	}

	for (int i = N - 1; i >= 0; i--)
	{
		temp = 0;
		for (int j = N - 1; j > i; j--)
		{
			if (arr[j] < arr[i])
			{
				if (dp_down[j] > temp)
					temp = dp_down[j];
			}
		}
		dp_down[i] = temp + 1;
	}

	temp = 0;
	for (int i = 0; i < N; i++)
	{
		if (temp < dp_up[i] + dp_down[i])
			temp = dp_up[i] + dp_down[i];
	}

	cout << temp - 1;
}
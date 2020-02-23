#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;

int main()
{
	int N;
	vector<vector<int>> line;
	vector<int> DP;
	cin >> N;

	for (int i = 0; i < N; i++)
	{
		vector<int> temp;
		int a, b;
		cin >> a >> b;
		temp.push_back(a);
		temp.push_back(b);
		line.push_back(temp);
	}

	sort(line.begin(), line.end());

	int temp;

	for (int i = 0; i < line.size(); i++)
	{
		DP.push_back(1);
		temp = 0;
		for (int j = 0; j < i; j++)
		{
			if (line[i][1] > line[j][1])
			{
				if (temp < DP[j])
					temp = DP[j];
			}
		}
		DP[i] = temp + 1;
	}

	sort(DP.begin(), DP.end());

	cout << line.size() - DP.back();
}
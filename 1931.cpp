#include<iostream>
#include<algorithm>
#include<vector>

using namespace std;

int main()
{
	int N;
	vector<pair<int, int>> cls;
	int start;
	int end;
	int cnt = 1;

	cin >> N;

	for (int i = 0; i < N; i++)
	{
		cin >> start >> end;
		cls.push_back(make_pair(end, start));
	}

	sort(cls.begin(), cls.end());

	end = cls[0].first;

	for (int i = 1; i < N; i++)
	{
		if (cls[i].second >= end)
		{
			cnt++;
			end = cls[i].first;
		}
	}
	cout << cnt;
}
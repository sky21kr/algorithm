#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main()
{
	int N;
	cin >> N;

	vector<pair<int, int>> arr;

	for (int i = 0, x = 0, y = 0; i < N; i++)
	{
		cin >> x >> y;
		arr.push_back(make_pair(y, x));
	}

	sort(arr.begin(), arr.end());

	for (int i = 0; i < N; i++)
	{
		printf("%d %d\n", arr[i].second, arr[i].first);
	}
}
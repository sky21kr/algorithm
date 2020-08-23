#include <iostream>

using namespace std;

int main()
{
	int N;
	cin >> N;

	for (int i = 0; i < 2 * N; i++)
	{
		for (int j = 0; j < N; j++)
		{
			if (j % 2 == i % 2)
			{
				cout << "*";
			}
			else
			{
				cout << " ";
			}
		}
		cout << endl;
	}
}
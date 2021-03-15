#include<iostream>
using namespace std;

int main() {
	int N;

	cin >> N;

	int result = 665;
	int temp;
	int check = 0; // 3연속 6인가

	while (1)
	{
		result++;
		temp = result;

		while (1)
		{
			if (temp % 10 == 6)
				check++;
			else
				check = 0;

			temp = temp / 10;

			if (check == 3)
			{
				N--;
				if (N == 0)
				{
					cout << result;
					return 0;
				}
				else
					break;
			}

			if (temp == 0)
				break;
		}
		check = 0;
	}
}
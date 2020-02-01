#include<iostream>
using namespace std;

int main() {
	int N, M; // N 세로 M 가로
	char board[50][50];

	cin >> N >> M;


	for (int i = 0; i < N; i++)
	{
		for (int j = 0; j < M; j++)
		{
			cin >> board[i][j];
		}
	}

	int result = 64;

	for (int i = 0; i + 8 <= N; i++) // i 세로
	{
		for (int j = 0; j + 8 <= M; j++) // j 가로
		{
			int tempA = 0;
			int tempB = 0;

			for (int y = i; y < i + 8; y++)
			{
				for (int x = j; x < j + 8; x++)
				{
					if ((x + y) % 2 == 0 && board[y][x] == 'B')
						tempA++;
					if ((x + y) % 2 == 1 && board[y][x] == 'W')
						tempA++;

					if ((x + y) % 2 == 0 && board[y][x] == 'W')
						tempB++;
					if ((x + y) % 2 == 1 && board[y][x] == 'B')
						tempB++;
				}
			}
			if (tempA < tempB)
				if (tempA < result)
					result = tempA;
				else;
			else
				if (tempB < result)
					result = tempB;
		}
	}

	cout << result;
}
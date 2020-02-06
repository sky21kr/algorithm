#include<iostream>
using namespace std;

int main()
{
	int A, B;
	bool sp;

	while (1)
	{
		sp = false;

		cin >> A >> B;

		if (A > B)
		{
			swap(A, B);
			sp = true;
		}

		if (A == 0 && B == 0)
			break;

		if (B % A == 0)
		{
			if (sp == false)
				cout << "factor";
			else
				cout << "multiple";

			cout << endl;
		}
		else
			cout << "neither" << endl;
	}
}
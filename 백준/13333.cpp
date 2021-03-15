#include<iostream>
using namespace std;

int main()
{
	int n;
	cin >> n;

	int arr[1000];

	for( int i = 0 ; i < n ; i++ )
	{
		cin >> arr[i];
	}

	int q;

	for( int i = n ; i >= 0 ; i-- )
	{
		q = i;

		for( int j = 0 ; j < n ; j++ )
		{
			if( arr[j] >= i )
				q--;
		}

		if( q <= 0 )
		{
			cout << i;
			break;
		}
	}
}
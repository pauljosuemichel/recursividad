#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

bool binSearch(vector<int> arr, int n){
    int i = arr.size()/2;

    if (arr[i] == n) return true;
    if (i == 0) return false;

    if (arr[i] < n){
        vector<int> newArr(arr.begin() + i + 1, arr.end());
        return binSearch(newArr, n);
    }
    if (arr[i] > n){
        vector<int> newArr(arr.begin(), arr.begin() + i);
        return binSearch(newArr, n);
    }
    return false;
}

int main(){
    vector<int> arr = {4, 45, 2, 3, 0, 234, 1};
    int n = 3;

    sort(arr.begin(), arr.end());

    cout << boolalpha << binSearch(arr, n);

    return 0;
}

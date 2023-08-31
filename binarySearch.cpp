// Buscador de numeros identicos

#include <iostream>
#include <algorithm>

using namespace std;

int arr[7] = {4,45,2,3,0,234,1};
int n = 3;
int i = sizeof(arr)/2;

int main(){
    const int tamaño = 7;
    sort(arr, arr + tamaño);
    return 0;
}

int binSearch(){
    if(arr[i] == n){ return true; }

    if(arr[i] < n ){ i/2; }
    i(arr[i] > n){  }
    
}

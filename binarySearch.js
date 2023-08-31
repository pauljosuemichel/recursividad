let arr = [4,45,10,67,2,3,0,1];
let n = 100;

arr = arr.sort((a, b) => a - b);

function binSearch(arr,n){
    let i = Math.floor(arr.length/2);

    if(arr[i] == n) return true;
    if(i == 0) return false;
    
    if(arr[i] < n) return binSearch(arr.slice(i), n);
    if(arr[i] > n) return binSearch(arr.slice(0,i), n);
    return false;
}

console.log(binSearch(arr,n));
function sortArray(arr,N){
    var low = 0;
    var high = N-1;
    var mid = 0;
    let temp = 0;

    while(mid<=high){
        switch(arr[mid]){
            case 0:
                temp = arr[low];
                arr[low] = arr[mid]
                arr[mid] = temp;
                low++; mid++;
                break;
            case 1:
                mid++
                break;
            case 2:
                temp = arr[mid];
                arr[mid] = arr[high];
                arr[high] = temp;
                high--;
                break;
            default:
                console.log('done');
        }
    }
    return arr;
}

console.log(sortArray([1,0,2,2,1,0],6));
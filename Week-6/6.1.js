function maxSubarraySum(arr, N){
    var curr = 0;
    var maxTillNow = 0;
    if(N===0){
        return maxTillNow;
    }
    for(let i=0;i<N;i++){
        curr+=arr[i];
        if (maxTillNow < curr){
             maxTillNow = curr;
        }
        if (curr < 0){
            curr = 0;
        }
    }
    return maxTillNow;
}

console.log(maxSubarraySum([1,2,3,4,-10],5));
console.log(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4],9));
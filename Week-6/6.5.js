function GivenDifference(A,B){
    var curr = 0;
    for(let i = 0;i < A.length;i++){
        for(let j = 0;j < A.length-1;j++){
            curr = Math.abs(parseInt(A[i]-A[j]));
            if(curr === B){
                return 1;
            } 
        }
    }
    return 0;
}

console.log(GivenDifference([5,10,3,2,50,80],78));
console.log(GivenDifference([-10,20],30));

// function GivenDifference(A,B){
//     var N = A.length;
//     let i=0;
//     let j=1;

//     while(i<N && j<N){
//         if(i!=j && A[j]-A[i] == B){
//             return 1;
//         } else if (A[j]-A[i]<B){
//             j++;
//         }else{
//             i++;
//         }
//     }
//     return 0;
// }
// console.log(GivenDifference([5,10,3,2,50,80],78));
// console.log(GivenDifference([-10,20],30));
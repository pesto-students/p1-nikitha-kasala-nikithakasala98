function spiralMatrix(arr){
    const n = arr.length;
    let top =0;
    let bottom = n-1;
    let left = 0;
    let right = n-1;
    let dir = 0;
    var result = [];
    let i =0;
    while(top<=bottom && left<= right){
        if(dir === 0){
            for(i=left;i<=right;i++){
                result.push(arr[top][i]);
            }
            top++;
        } else if(dir === 1){
            for(i=top;i<=bottom;i++){
                result.push(arr[i][right]);
            }
            right--;
        } else if(dir === 2){
            for(i=right;i>=left;i--){
                result.push(arr[bottom][i]);
            }
            bottom--;
        } else if(dir === 3){
            for(i=bottom;i>=top;i--){
                result.push(arr[i][left]);
            }
            left++;
        }
        dir = (dir+1)%4;
    }
    return result;
}
let a = [[1,2,3],[4,5,6],[7,8,9]];
console.log(spiralMatrix(a));
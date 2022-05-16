function threeSumClosest(nums, target) {
   nums.sort((a,b) => a-b);
   let ans = nums[0]+nums[1]+nums[2];
   for(let i=0;i<nums.length;i++){
       let start = i+1; end = nums.length-1;
        while(start<end){
            const sum = nums[i]+nums[start]+nums[end];
            if(sum>target){
                end--;
            } else{
                start++;
            }
            if(Math.abs(target-sum) < Math.abs(target-ans)){
                ans=sum;
            }
        }
   }
   return ans;
}

console.log(threeSumClosest([-1,2,1,-4],1));
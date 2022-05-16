function BuySellStock(price){
    var minPrice= Number.MAX_VALUE;
    var maxProfit = 0;
    n = price.length-1;

    for(let i = 0; i < n ; i++){
        minPrice = Math.min(minPrice, price[i]);
        maxProfit = Math.max(maxProfit,price[i]-minPrice);
    }
    return maxProfit;

}

console.log(BuySellStock([7,1,5,3,6,4]));
console.log(BuySellStock([7,6,4,3,1]));
var multiply = function(a,b){
    return a*b
}

var memoized = function(foo){
    var cache = {};
    return function(...args){
        var argId = args.toString();
        if(cache[argId]){
            return cache[argId]
        }else{
            var value = foo(...args);
            cache[argId] = value
            return
        }
    }
}

console.log(multiply(2,3)); //calculated output
console.log(multiply(2,3)); //cache output


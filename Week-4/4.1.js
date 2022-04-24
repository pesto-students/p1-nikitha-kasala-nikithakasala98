const PolyfillPromiseState = {
 PENDING: "PENDING",
 RESOLVED: "RESOLVED",
 REJECTED: "REJECTED"
};

class PolyfillPromise {
    constructor(fn){
        this.PolyfillPromiseState = PolyfillPromiseState.PENDING;
        this.resolver = this.resolver.bind(this);
        this.rejector = this.rejector.bind(this);
        this.thenFn = null;
        this.catchFn = null;
        fn(this.resolver,this.rejector);
    }
    resolver(resolveData){
        if(this.PolyfillPromiseState === PolyfillPromiseState.PENDING){
            this.thenFn && this.thenFn(resolveData);
        }
        this.PolyfillPromiseState = PolyfillPromiseState.RESOLVED;
    }

    rejector(rejectData){
        if(this.PolyfillPromiseState ===PolyfillPromiseState.PENDING){
            this.catchFn && this.catchFn(rejectData)
        }
        this.PolyfillPromiseState = PolyfillPromiseState.REJECTED;
    }
}

const getNumber = () =>
    new PolyfillPromise((res, rej) =>{
        const randomNumber = parseInt(Math.random()*100, 10);
        setTimeout(()=>{
            if(randomNumber%5 === 0){
               rej(console.log (`Rejected with Number ${randomNumber}`))
            }
            else{
                res(console.log (`Resolved with Number ${randomNumber}`))
            }
            
        },
        randomNumber*10)
   
});

getNumber();
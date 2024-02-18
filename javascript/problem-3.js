function findLargestPrimeFactor(limit){
    let primeFactors = [];
    for (let i = 2; i <= limit ; i++){
        if (i > 2 && i % 2 === 0){
            continue;
        }
        if (limit % i === 0){
            if (isPrime(i)){
            limit = limit / i;
            primeFactors.push(i);
            }
        }
    } 
    primeFactors = primeFactors.sort(function(a, b){return a - b;});
    return Math.max(...primeFactors);
}

function isPrime(n){
    if (n < 2){
        return false;
    } for (let i = 2; i <= Math.sqrt(n); i++){
        if (n % i === 0){
            return false;
        }
    } return true;
}

console.log(findLargestPrimeFactor(600851475143));

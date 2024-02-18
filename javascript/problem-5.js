function findPrimeFactors(limit){
    let primeFactors = [];
    for (let i = 2; i <= limit ;i++){
       while(limit % i === 0){
            limit = limit / i;
            primeFactors.push(i);
        }
    }
    return primeFactors;
}

function lcmOfTwo(a, b){
    let aFactors = findPrimeFactors(a);
    let bFactors = findPrimeFactors(b);
    let aCounter = {};
    let bCounter = {};
    let lcm = 1;
    for (let i = 0; i < aFactors.length; i++){
        if (aFactors[i] in aCounter){
            aCounter[aFactors[i]]++;
        } else {
            aCounter[aFactors[i]] = 1;
        }
    }
     for (let i = 0; i < bFactors.length; i++){
        if (bFactors[i] in bCounter){
            bCounter[bFactors[i]]++;
        } else {
            bCounter[bFactors[i]] = 1;
        }
    }
    let uniqueLst = [...new Set(aFactors.concat(bFactors))];
    for (let num of uniqueLst){
        if (num in aCounter && num in bCounter){
            lcm *= num ** Math.max(aCounter[num], bCounter[num]);
        } else if (num in aCounter){
            lcm *= num ** aCounter[num];
        } else if (num in bCounter){
            lcm *= num ** bCounter[num];
        }
    }
    return lcm;
}

function findLcmTillLimit(limit){
    let lcm = 1;
    let current = 1;
    while (current <= limit){
        lcm = lcmOfTwo(current, lcm);
        current++;
    }
    return lcm;
}

console.log(findLcmTillLimit(20));

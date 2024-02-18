function sumEvenValuedFibonacciTerms(){
    let sum = 2;
    let first = 1;
    let second = 2;
    let third = 0;
    while(true){
        if (third > 4000000){
            return sum;
        }
        third = first + second;
        first = second;
        second = third;
        if (third % 2 === 0){
            sum += third;
        }
    }
}

console.log(sumEvenValuedFibonacciTerms());

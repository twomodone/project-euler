function findLargestPalindromeProduct(){
    let maxPalindrome = -Infinity;
    for (let i = 100; i <= 999; i++){
        for (let j = 100; j <= 999; j++){
            let product = i * j;
            if (isPalindrome(product)){
                if (product > maxPalindrome){
                    maxPalindrome = product;
                }
            }
        }
    }
    return maxPalindrome;
}

function isPalindrome(number){
    let stringFormat = number.toString();
    return stringFormat === stringFormat.split('').reverse().join('');
}

console.log(findLargestPalindromeProduct());

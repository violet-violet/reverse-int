function reverse (n) {
    let number  = n.toString().split('').reverse();
    console.log(number);
    
    if (number[number.length - 1] === '-') {
        console.log(number[number.length - 1]);
        number.pop();
    }

    number = number.join('');
    console.log(number);
    return parseInt(number, 10);
}

console.log(reverse(165), 'Should return 561');
console.log(reverse(-425), 'Should return 524 when -425 given');

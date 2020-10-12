module.exports = function reverse (n) {
    let number  = n.toString().split('').reverse();
    
    if (number[number.length - 1] === '-') {
        number.pop();
    }

    number = number.join('');
    return parseInt(number, 10);
}

let num = 33721;
let num1 = num.toString().split('');
//alert(num1);
//alert(typeof(num1));
let reducer = (accumulator, currentValue) => accumulator * currentValue;
let result = num1.reduce(reducer);
console.log(result);
let result2 = result * result * result;
//console.log(result2);
console.log(result2.toString()[0]+result2.toString()[1]);

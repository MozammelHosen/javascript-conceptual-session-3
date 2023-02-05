//  1 থেকে n পর্যন্ত সংখ্যার যোগফল নির্ণয় করো।
const num1 = 23;
const num2 = 30;
let sum = 0;
sum = num1 + num2;
console.log(sum);


let n=10;
let sum2 = 0;
for(let i=1; i<=n; i++){
    sum2 = sum2 +i;
// console.log(i);
}
console.log(sum2);

//  How to decliar Functions
function addNumber(number){
    let sum3 = 0;
    for(let i = 1; i <= number; i++){
        sum3 += number;
    }
    return sum3;
}
const myNumber = 10;
const result = addNumber(myNumber);
console.log(result);



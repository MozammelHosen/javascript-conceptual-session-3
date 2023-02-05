//  ৩ এর নামতা লিখো জাভাস্ক্রিপ্ট ব্যাবহার করে।

const num1 = 1;
const num2 = 3;
const result = num1 * num2;
// console.log(result);

for (let i = 1; i <= 10; i++) {
  const facrial = i * 3;
  const result = `${i} X 3 = ${facrial}`;
  //   console.log(result);
}

//  এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে।

/* ইনপুটঃ [-1,2,-3,4,5,6,-7,8,-9,10]
আউটপুটঃ 3 */

function AddArrays(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element > 5) {
      //   sum += element;
      sum ++;
      console.log("total sum:", sum);
    }
    // console.log(element);
  }
  return sum;
}
const myArray = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];
const result1 = AddArrays(myArray);
console.log(result1);

function addArray(number) {
  let array = [];
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element >= 5) {
      array.push(element);
    }
  }
  return array;
}
const array = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];
const result2 = addArray(array);
// console.log(result2);

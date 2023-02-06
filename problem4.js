// ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

function radianToDegree(degree) {
  const degre = degree * 57.2958;
  const dee = degre.toFixed(2);
  return dee;
}
const radians = 10;
const result = radianToDegree(radians);
console.log(result);

// ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

function getRadians(radian) {
  const pi = 3.141592653589793238462643383279502884197;
  const radi = 180 / pi;
  const radians =(radian *radi).toFixed(2);
  return radians;
}
const degre = 10;
const result1 = getRadians(degre);
console.log(result1);


function radianToDegrees(radians) {
    const pii= 3.141592653589793238462643383279502884197;
    const radia = 180/pii;
    const radi = radians * radia;
    return radi.toFixed(2);
}
const radi = 25;
const result2 = radianToDegrees(radi);
console.log(result2);


function radianToDegrees(radians) {
    const pii= 3.141592653589793238462643383279502884197;
    const radia = 180/pii;
    const radi = radians * radia;
    return radi.toFixed(2);
}
const radin = 199;
const result3 = radianToDegrees(radin);
console.log(result3);

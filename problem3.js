//   তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।

function names(name) {
  for (let i = 0; i < name; i++) {
    const num = name[i];
    console.log(num);
  }
}
const result = names("Mozammel", "Hosen");
// console.log(result);

function bestFriend(friendNameArray) {
  let value = friendNameArray[0];
  for (i = 0; i < friendNameArray.length; i++) {
    let element = friendNameArray[i];
    if (element.length > value.length) {
      value === element;
      value = friendNameArray[i];
    }
  }
  return value;
}
let friendNameArray = ["apmi", "deanm"];
const friendName = bestFriend(friendNameArray);
// console.log(friendName);


//   তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।

function reverseFriend(first, second) {
  let friend1 = first.length;
  let friend2 = second.length;
  let largest = "";
  if(friend1 > friend2){
    largest = first;
  }else{
    largest = second;
  }
  let reverseString = "";
  for(let i = largest.length - 1; i >= 0; i--){
    const element = largest[i];
    reverseString += element;
  }
  return reverseString;
}
const friends = reverseFriend("mozammel","Hosen");
console.log(friends);

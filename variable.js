// 10 + 10 = 20

// variable declare koro r seta moddhe 20 assign koro

// var, let, const

/*************Variable declaration and value assign */
//identifier variable = value;
//var number1
console.log(number1);
var number1 = 20; // var number1 = undefined;

console.log(number2);
let number2 = 30; // let number2 = undefined;

console.log(number3);
const number3 = 40; //let number3;

let z;
let x = 20;
if (x > 10) {
  z = 30;
  const p = 40;
}
console.log(z);

//Dicision making  if..else

// 80 - 100 modhe thake tahole A+, 70 - 79 er moddhe thake A, 60 -69 moddhe thale A-

const mark = -65;

if (mark < 0) {
  console.log("Please give a positive  Number as a input value ");
} else {
  if (mark >= 80 && mark <= 100) {
    console.log("A+");
  } else if (mark >= 70 && mark < 80) {
    console.log("A");
  } else if (mark >= 60 && mark < 70) {
    console.log("A-");
  } else {
    console.log("fail");
  }
}

// && --> and operator,   || --> or operator

// mark >= 80 && mark <= 100

const mark = 83;
const condition = mark >= 80 || mark >= 85;
console.log(condition);

// true && true --> true ,  false && true --> false, true && false --> false, false && false --> false

// true || false --> true,

//Loop

// programming ki 10 print koro
// 1- 10;
// 5 er ghorer namta

for (let i = 1; i <= 10; i++) {
  let j = 5 * i;
  console.log("5 * ", i, " = ", j);
}

let i = 1;
while (i <= 10) {
  let j = 5 * i;
  console.log("5 * ", i, " = ", j);
  i++;
}

//Array

// Array declaration

const marks = [80, 85, 87, 88, 99];

//array value access
console.log(marks[0]);
console.log(marks[1]);

//array travels
for (let i = 0; i < marks.length; i++) {
  const value = marks[i];
  console.log(value);
}

const marks = [80, 85, 87, 88, 99];
for (let value of marks) {
  console.log(value);
}

//array value assign

const marks = [55, 44, 80, 97];

marks[4] = 85;
marks.push(100);
marks.unshift(60);
console.log(marks);

marks.pop();
marks.shift();
console.log(marks);

// array duplicate value ber kora

// for(let i = 0; i < marks.length; i++){
//     const value = marks[i];

//     for(let j = 0; j < marks.length; j++){
//         if(i != j){
//             if(value !== marks[j]){

//             }
//         }
//     }
// }

const marks = [98, 87, 85, 88, 44, 44, 87];
const unique = [];

for (let value of marks) {
  if (unique.indexOf(value) == -1) {
    unique.push(value);
  }
}

console.log(unique);

const marks = [98, 87, 85, 88, 44, 44, 87];

console.log(marks.indexOf(100) == -1);

//  এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য এর চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।


const numbers = [20, 49 ,-2, 56, 44];
const positiveNumbers = [];

for(let value  of numbers){
    if(value  >= 0){
        positiveNumbers.push(value);
    } else {
        break; 
    }
    
}
console.log(positiveNumbers);

//function 

//function likhte je function er kaj hocce negetive value chara baki number return korbe

function positiveNumbers(numbers){
    const positiveNumber = [];
    for(let value  of numbers){
        if(value  >= 0){
            positiveNumber.push(value);
        } else {
            continue;
        }    
    }
    return positiveNumber; 
}

const numbers = [20, 49 ,-2, 56, 44];
const positive = positiveNumbers(numbers);
console.log(positive)


// duita songa jog korte hobe 


function jog(x, y){
    const res = x + y;
    return res; 

}

const total = jog(10, 20);
console.log(total)




function largestNumber(numbers){
    //numbers = [34, 50, 74, 80, 84, 37, 120, 99, 92]
    const largeNumber = []
    for(let value of numbers){
        if(value > 80) {
            largeNumber.push(value)
        }
    }

    return largeNumber;

}
const myNumber = [34, 50, 74, 80, 84, 37, 120, 99, 92]
const answer = largestNumber(myNumber);
console.log(answer)



function validation(numbers){
     //numbers = [34, 50, 74, 80, 84, 37, 120, 99, 92]
    // const even = []
    // for(let value of numbers){
    //     if(value % 2 == 0){
    //         even.push(value)
    //     }
    // }

    // return even;
    const odd = []
    for(let value of numbers){
        if(value % 2 !== 0){
            odd.push(value)
        }
    }

    return odd;

}

const myNumber = [34, 50, 74, 80, 84, 37, 120, 99, 92]
const answer = validation(myNumber);
console.log(answer)




/* 
৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত  কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই  প্যারামিটার হিসেবে নিবে। 
এইবার ভালো করে খেয়াল করো। 
প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 
এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 
উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 

*/

/*
৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 
*/

function bestFriend(friendName){
    //friendName = ["lipi", "Mahfuz", "mukit", "faysal", "tamim", "tanjina", "zyxabcd"];
    let largest = friendName[2];
    for(let i = 0; i < friendName.length; i++){
        if(friendName[i].length > largest.length){ // i = 2  7 > 6
            largest = friendName[i]; // tanjina
        } 
    }

    return largest; 

}

const friends = ["lipi", "Mahfuz", "mukit", "faysal", "tamim", "tanjina", "zyxabcd"];
const nameBoroFriend = bestFriend(friends);
console.log(nameBoroFriend);


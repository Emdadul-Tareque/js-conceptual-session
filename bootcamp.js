// variable  var , let , const

var number1 = 10;
let number2 = 20;
const number3 = 30;

if (true) {
  var number1 = 10; // 
  let number2 = 20;
  const number3 = 30;
  number2 = 50;
  console.log(number2)
  number3 = 40;
  console.log(number3)
}


if(x == 20)


//

const taka = 1000; 

if(taka > 500){
    console.log("goru")
} else {
    console.log("morgi")
}

// 80 -100 marks pay tahole se A+ pabe, 70 - 79 pay tahole se A pabe, 60 - 69 pay tahole se A- pabe

const marks = -85;

if(marks < 0) {
    console.log("Please give a positive number as a input value")
} else {
    if(marks >= 70 && marks <= 79 ){
        console.log("A")
    } else if (marks >= 80 && marks <= 100){
        console.log("A+")
    } else if(marks >= 60 && marks <= 69){
        console.log("A-")
    } else {
        console.log("B")
    }
    
}




// true && false -> false , false && true --> false , true && true --> true 

// true || false -> true, false || true -> true, true || true --> true 


// function 

function multiply(x, y, z ){

    const gun = x * y *z ;

    return gun;

}

const res = multiply(10, 20, 40);
console.log(res)



// kilometer --> meter e 

function kilometerToMeter(kilometer){
     if(kilometer < 0 ){
         return "please give a positive number"
     } else if( typeof kilometer == "string") {
         return "please give a number as a input value"
     } else if( typeof kilometer == "boolean") {
        return "please give a number as a input value"
    }

    var meter = 1000 * kilometer;
   
    return "the result is "+ meter;
}

const result = kilometerToMeter(true);
console.log(result)


const  x = 100; 

const y = "Hello";

const z = true;

console.log(typeof x)
console.log(typeof y)
console.log(typeof z)



// 1 - 10 print korte hobe 

for(let i = 1; i <= 10; i++){
    console.log(i);
}


// array 

// const marks = [10, 40, 50 ,70];
const marks = ["ten", "fourty", "fifty", "seventy"]

// console.log(marks[0])
// console.log(marks[1])
// console.log(marks[2])
// console.log(marks[3])

for(let i = 0 ; i < marks.length; i++){
    console.log(marks[i])
}

const marks = ["ihbgiu", "fourty", "fifty", "seventy"]

for(let value of marks){
    console.log(value)
}

const str = "name";
console.log(str.length)


 const marks = [60, 70, 50 ,80, 100];
 var largestValue = marks[0];
 for(let i = 0; i < marks.length; i++){
      // largestValue = 100
     if(marks[i] >= largestValue){ // i = 4; marks[4] = 100 if(100 > 80)
         largestValue = marks[i]; // largestValue = 100
     }

 }

 console.log(largestValue);

 function largestElement(marks){
    var largestValue = marks[0]; 
    for(let i = 0; i < marks.length; i++){
        if(marks[i].length > largestValue.length){ // i = 4; marks[4] = 100 if(100 > 80)
            largestValue = marks[i]; // largestValue = 100
        }
    }

    return largestValue;
 }

//  const marks = [60, 70, 50 ,80, 100];
const name = ["Emra", "mahera", "Arman", "jhon"]
 const result = largestElement(name)
 console.log(result);

 //condition , for loop, array, function



 const x = 10;
 const y = 20; 

 const res = x + y; 

 const result = res + 100; 
 console.log(result )



 // 

let i = 7;
 while( i < 20){
    console.log(i);
    i = i+2;
 }


//3! = 3 * 2 * 1 = 6

// 5! = 5 * 4 * 3 * 2 * 1 = 120

// 5! = 5 * (5-1) * (5-2) * (5-3) * (5-4)

var factorial = 5
for(let i = 1; i < 5; i++){

     factorial = factorial * (5 - i) // i = 3
    
}

console.log(factorial)

var str = "hello"
console.log(str.length)
for(let i = str.length; i >= 0 ; i--){
    console.log(str[i])
}

function multiply(x, y, z){
    const gun = x * y *z;
    return gun;
}

console.log(multiply(1, 2, 3))




let number = 7;

while(number < 20){
    console.log(number);
    number = number + 2;
}

/* 

১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 
২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 
.
৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত  কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই  প্যারামিটার হিসেবে নিবে। 
এইবার ভালো করে খেয়াল করো। 
প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 
এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 
উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 
.
৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 
.
৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য এর চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 


*/


/* 
১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।

1 feet = 12 inch

*/

function feetToInch(feet){
    const inch = feet * 12;
    return inch;
}

console.log(feetToInch(5))


/*
২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 

 100cm = 1 m
*/

function centimeterToMeter(centimeter){

    const meter = centimeter / 100;
    return meter;

} 

console.log(centimeterToMeter(300))



/*
৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত  কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই  প্যারামিটার হিসেবে নিবে। 
এইবার ভালো করে খেয়াল করো। 
প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 
এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 
উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 

*/

function paperRequirements(firstBook, secondBook, thirdBook){

    const totalPage = firstBook * 100 + secondBook * 200 + thirdBook * 300; 
    return totalPage;

}

console.log(paperRequirements(1, 2, 3));

/* 

৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

*/


function bestFriend(array){
   // array - ["safin", "afroja", "mim", " dipu", "Mohiuddin"]
    let largestName = array[4];
    for(let i = 1; i < array.length; i++){

        if(array[i].length > largestName.length) {
            largestName = array[i];
        }
    }
    return largestName;


}

const friendName = ["safin", "afroja", "mim", " dipu", "Mohiuddin"]
console.log(bestFriend(friendName))



const name1 = "emdadul"

const name2 = "hoque";

if (name1.length > name2.length) {
    console.log("largest name is ", name1)
} else{
    console.log("largest name is ", name2)
}


/*

.
৫. একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য এর চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 


*/

const numbers = [10 , 29, 35, -22, 48 ,33]

// const positiveNumber = [10, 29, 35]


function findPositiveNumber(array){
    //array = [10 , 29, 35, -22, 48 ,33]
    const positiveNumber = [] // [10, 29, 35]
    for(let i = 0; i < array.length; i++){ // i = 3
        if(array[i] > 0) {                      // array [3] = -22, if(-22 > 0 )
            positiveNumber.push(array[i]);
        } else {
            break;
        }
    }

    return positiveNumber;

}
const numbers = [10, 29, 35, -22, 48 ,33]
console.log(findPositiveNumber(numbers))


/*
   str =  "I love my country";  theke ber korte hobe ekhane koyta word ace  function name wordCount 

*/

function wordCount(sentence){

    let count = 0;
    for(let i = 0; i < sentence.length; i++){
        if(sentence[i] == " "){
            count++;
        }
    }

    return count+1;

}
const str = "I love my country"

console.log(str.split(' ').length)
console.log(wordCount(str))



function wordCount(sentence){
    const word =  sentence.split(' ').length;
    return word; 
}

console.log(wordCount("I love my country"));
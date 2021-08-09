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
        // largestValue = 100
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


 

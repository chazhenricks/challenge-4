// What is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder?

var superNumber= [1,2,3,4,5,6,7,8,9,10];
var testNum = 1;
var resultNum;


// !take a test number and divide it by each item in the array

// !check if the test number has a remainder that is not a integer

// !if test number has a ramainder that is an interger, test next number in array

//!if test number has a remainder that is not an integer, break the loop and add 1 to your test number and start again.

//!if test number is successfully divisible by all numbers in array log the value of that number


function testThisNumber(){
  superNumber.forEach(function(element){
    resultNum = testNum / element;
    switch (Number.isInteger(resultNum)){
      case false:
      testNum++;
      testThisNumber();
      break;

      default:
      break;
    };
  })
}

testThisNumber();
console.log("The smallest number divisible by digits 1-10 is " + testNum);





















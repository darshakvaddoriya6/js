// function addTwoNumbers(num1,num2){
//    console.log( num1 + num2); 
// }
function addTwoNumbers(num1,num2){
   let result = num1 + num2
   return result
   
}

const result = addTwoNumbers(4,5)

// console.log("Result", result);

function loginUserMessage(username) {
   if (!username) {
      console.log("Please enter a username");
      return
   }
   return `${username} just login`
}

// console.log( loginUserMessage("darshak"));

function calculateCardPrice(...num1){
   return num1
}


// console.log(calculateCardPrice(100,200,300,400));

const user ={
   username : "darshak",
   price: 22
}

function handleObject(anyobject){
   console.log(`username is  ${anyobject.username} and price is ${anyobject.price}`);
   
}

// handleObject(user)

// handleObject({
//    username : "sam",
//    price: 299
// })

const myNewArr = [200,300,400,500]

function retuenSecoundValue(getarry){
   return getarry[1]
}

// console.log(retuenSecoundValue(myNewArr));


let totalValue = 2000;
let discountPercentage = 20;

let discountedPrice = totalValue -(discountPercentage/100)*totalValue;
console.log("final price of discount is ",discountedPrice);


let username = "admin";
let password = "12345";

if (username ==="admin" && password ==="12345"){
    console.log("login suciessfull");
}
else{
    console.log("invalid passor or id");
}

let ammountInINR = 850;
let ammountInUSD = 850 / 82;

console.log(`${ammountInINR} INR IS ${ammountInUSD} USD`);


let numberOfChilds = 2;
let numberOfAdults = 1;
let numberOfSeniors = 1;

let chilsticktprice = 100;  
let adultTicketPrice =150;
let seniorTicketPrice =120;

let totaltikitprice =
    numberOfAdults*adultTicketPrice + 
    numberOfChilds * chilsticktprice+
    numberOfSeniors*seniorTicketPrice;

console.log(`the total tikit price is ${totaltikitprice}`);



let typeOfPackage = "standerd";

switch(typeOfPackage){
    case "standerd":
        console.log("Your package will be delivered in next 3-5 Days");
        break;
        case "expreess":
            console.log("Your package will be delivered in next 1-2 Days");
            break;
        case "overnight":
        console.log("Your package will be delivered in next 1-2 Days");
        break;
        default:
        console.log("Invalid package type!!");
}


let name = "Mithun";
let email = "mithun.s@pw.live";
let age = "21";

if (typeof name !== "string") {
  console.log(`Name Should Be A String..`);
} else if (typeof email !== "string"){
    console.log(`email Should Be A String..`);
}else if (typeof age !== "number"){
    console.log(`age Should Be A Number..`);
}else{
    console.log(`Yahh!!! All the fields are proper.`);
}

let shoppingList = [
    "Pen",
    "Papper",
    "Candy",
    "Soda",
    "Keyboard",
    "Screen Protector",
  ];
  
  for (let i = 0; i < shoppingList.length; i++) {
    console.log(shoppingList[i]);
  }

  let list = [

  ]

  console.log("counting from 10 to 0");
  let i =0;
  while(i<=10){
    console.log(i);
  i++;
  }

  const ars = [1, 2, 999, 56, "Mithun", 1234, "PW"];

for (let i = 0; i < ars.length; i++) {
  if (typeof ars[i] === "string") {
    console.log(`Found The First String: ${ars[i]}`);
    break;
  }
}


let arr = [1, 2, -3, 5, -9, -8, -7, 7];

for (let i =0; i<arr.length; i++ ){
    if (arr[i] < 0) {
        continue;
      }
      console.log(arr[i]);
    }


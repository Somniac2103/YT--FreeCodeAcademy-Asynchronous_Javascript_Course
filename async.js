//callback hell explained

let stocks = {
  Fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid : ["water", "ice"],
  holder : ["cone" ,"cup" , "stick"],
  toppings : ["chocolate", "peanuts"]
};

let is_shop_open = true;

let toppings_choice = () => {
  return new Promise( (resolve,reject)=>{
    setTimeout(()=>{
      resolve(console.log("Which topping would you like?"));
    }, 3000);
  });
};


async function kitchen () {
  console.log(" A ")
  console.log(" B ")
  console.log(" C ")

  await toppings_choice()
  console.log(" D ")
  console.log(" E ")
};

kitchen();

console.log("Washing the dishes...");
console.log("Cleaning the tables..");
console.log("Taking other orders..");



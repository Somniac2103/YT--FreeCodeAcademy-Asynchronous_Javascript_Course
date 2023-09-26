//callback hell explained

let stocks = {
  Fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid : ["water", "ice"],
  holder : ["cone" ,"cup" , "stick"],
  toppings : ["chocolate", "peanuts"]
};

let is_shop_open = false;

function time(ms){
  return new Promise( (resolve, reject)=>{
    if(is_shop_open){
      setTimeout(resolve, ms)
    } else {
      reject(console.log('Shop is closed'))
    }
  })
};

async function kitchen (){
  try{
    await time(2000);
    console.log(`${stocks.Fruits[1]} has been selected.`);

    console.log("Production started...");

    await time(2000);
    console.log("Fruit has been cut...");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been selected...`);

    await time(1000);
    console.log("Machine started...");

    await time(2000);
    console.log(`Icecream added to ${stocks.holder[2]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} has been added`);

    await time(2000);
    console.log("Icecream has been served. Thank you")   

  }
  catch(error){
    console.log("Customer left!!!", Error)

  }
  finally{
    console.log("Day ended, shop is closed.")

  }
};

kitchen();
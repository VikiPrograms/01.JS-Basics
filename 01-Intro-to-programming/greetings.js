function greeting([input]){
    let name = input;
    console.log(`Hello, ${name}!`);
}

function concatenateData(input){
    let fName = input[0];
    let lName = input[1];
    let age = input[2];
    let city = input[3];
    console.log(`You are ${fName} ${lName}, a ${age}-years old person from ${city}.`);
}

concatenateData(['Viktoria', 'Urucheva', 18, 'Plovdiv']);

function architectProjects(input){
    let name = input[0];
    let number = Number(input[1]);
    let hours = number*3;
    console.log(`The architect ${name} will need ${hours} hours to complete ${number} project/s.`);
}
architectProjects(["George","4"]);

function petShop(input){
    let dogFoodPrice = Number(input[0]);
    let catFoodPrice = Number(input[1]);
    let finalPrice = dogFoodPrice*2.5 + catFoodPrice*4;
    console.log(`${finalPrice} lv.`);
}

petShop(["2","4"]);

function greenYard(input){
    let yard = Number(input);
    let price = yard * 7.61;
    let discountPrice = price * 18 / 100;
    let finalPrice = price - discountPrice;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discountPrice} lv.`);
}

greenYard("550");
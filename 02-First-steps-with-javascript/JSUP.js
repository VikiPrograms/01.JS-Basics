function convertor(input){
    let usd = Number(input);
    let bgn = usd * 1.79549;
    console.log(bgn);
}

function radiansToDegrees(input){
    let radians = input;
    let degrees = radians * 180 / Math.PI;
    console.log(degrees);   
}

function deposit(input){
    let depositedSum = Number(input[0]);
    let monthsOfDeposit = Number(input[1]);
    let yearlyPercent = Number(input[2]);
    let sum = depositedSum +  monthsOfDeposit*((depositedSum * yearlyPercent/100)/12);
    console.log(sum);
}

function Literature(input){
    let numberOfPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let NumberOfDays = Number(input[2]);
    let hoursPerDay = numberOfPages / pagesPerHour / NumberOfDays;
    console.log(hoursPerDay);
}

function suppliesForSchool(input){
    let pensPrice = Number(input[0]) * 5.8;
    let markersPrice = Number(input[1]) * 7.2;
    let detergentsPrice = Number(input[2]) * 1.2;
    let sum = pensPrice+markersPrice+detergentsPrice;
    let reduction =  Number(input[3]);
    let finalSum = sum - sum * reduction/100;
    console.log(finalSum);
}

function Repainting(input){
    let protectiveNylon = (Number(input[0])+ 2) * 1.5;
    let paint = Number(input[1]) * 14.5;
    let paintSeparator = Number(input[2]) * 5.0 + 0.4;
    let sum = paint + paint * 1/10 + protectiveNylon + paintSeparator;
    let finalSum = sum * 3/10 * Number(input[3]);
    console.log(sum + finalSum);
}

function FoodDelivery(input){
    let chickenPrice = Number(input[0]) * 10.35;
    let fishPrice = Number(input[1])* 12.4;
    let vegetarianPrice = Number(input[2])* 8.15;
    let dessert = 2/10 * (chickenPrice+fishPrice+vegetarianPrice);
    console.log(chickenPrice+fishPrice+vegetarianPrice+dessert+2.5);
}

function BasketballEquipment(input){
    let shoes = Number(input[0]) - 4/10* Number(input[0]);
    let clothes = shoes - 1/5 * shoes;
    let ball = 1/4 * clothes;
    let accessories = 1/5 * ball;
    console.log(shoes + clothes + ball + accessories + Number(input[0]));
}

function FishTank(input){
    let length = parseInt(input[0]);
    let width = parseInt(input[1]);
    let heigth = parseInt(input[2]);
    let percent = parseInt(input[3]);
    let V = length*width*heigth;
    let litres = V/1000;
    console.log(litres - litres*percent/100);
}

FishTank(["85 ",

"75 ",

"47 ",

"17 "]);
function SumMin(input){
    let sum1 = Number(input[0]);
    let sum2 = Number(input[1]);
    let sum3 = Number(input[2]);
    let totaSum = sum1 + sum2 + sum3;
    let minutes = (totaSum/60);
    minutes = Math.floor(minutes);
    let seconds = totaSum % 60;
    if(seconds < 10){
        console.log(minutes + ":0" + seconds);
    }
    else{
        console.log(minutes + ":" + seconds);
    }
}

function BonusPoints(input) {
   let points = Number(input);
   let bonus =0.0;  
   if(input <= 100){
    bonus = 5;
   }
   else if(100 < input <= 1000){
    bonus = points * 4/5;
   }
   else {
    bonus = points /10;
   }
   if(points % 2 == 0){
    bonus += 1;
   }
   if(points % 2 == 1){
    bonus += 2;
   }

   console.log(bonus);
   console,log(bonus + points);

}

BonusPoints("175");
BonusPoints("2703");

function Time15Min(input){
    let hour1 = Number(input[0]);
    let minutes1 = Number(input[1]);
    let hour2 = 0;
    let minutes2 = 0;
    if(minutes1 + 15 >= 60){
        minutes2 = minutes1 - 45;
        if(hour1 + 1 >= 24){
            hour2 = 0;
        }
        else{
            hour2 = 1 + hour1;
        }
    }
    else{
        minutes2 = minutes1 + 15;
        hour2 = hour1;
    }

    if(minutes2 < 10){
        console.log(hour2 + ":0" + minutes2);
    }
    else{
        console.log(hour2 + ":" + minutes2);
    }
}

function ToyShop(input) {
    // Convert input values to numbers
    let holiday = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let cars = Number(input[5]);

    // Calculate the total price of toys
    let finalPrice = puzzles * 2.6 + dolls * 3 + bears * 4.1 + minions * 8.2 + cars * 2;

    // Apply the discount if the total number of toys is over 50
    if (puzzles + dolls + bears + minions + cars > 50) {
        finalPrice *= 0.75;
    }

    // Apply the 10% discount
    finalPrice *= 0.9;

    if (finalPrice >= holiday) {
        console.log(`Yes! ${(finalPrice - holiday).toFixed(2)} lv left.`);
    } else {
        console.log(`No! ${(holiday - finalPrice).toFixed(2)} lv needed.`);
    }
}

ToyShop(["320", "8", "2", "5", "5", "1"]);